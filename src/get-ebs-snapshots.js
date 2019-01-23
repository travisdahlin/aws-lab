import AWS from "aws-sdk";

/**
 * Filter EBS snapshots by an expiration date.
 * @param {dateString} expireDate - ISO 8601 datestring.
 * @param {array} ownerId - The snapshot owners
 * @param {string} region - The AWS region to query.
 * @returns {array} Array of objects.
 */
export async function snapshotDateFilter(expireDate, ownerId, region) {
  const ec2 = new AWS.EC2({ region: region });
  const snapshots = await ec2
    .describeSnapshots({ OwnerIds: ownerId })
    .promise();
  return snapshots.Snapshots.filter(
    snapshot => Date.parse(snapshot.StartTime) < Date.parse(expireDate)
  );
}

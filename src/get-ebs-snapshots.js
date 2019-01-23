import AWS from "aws-sdk";

/**
 * Returns array of snapshots filtred by an expiration value.
 * @param {dateString} expireDate - ISO 8601 datestring.
 * @param {string} region - The AWS region to query.
 */
export async function snapshotDateFilter(expireDate, region) {
  const ec2 = new AWS.EC2({ region: region });
  const snapshots = await ec2.describeSnapshots().promise();
  return snapshots.Snapshots.filter(
    snapshot => Date.parse(snapshot.StartTime) < Date.parse(expireDate)
  );
}

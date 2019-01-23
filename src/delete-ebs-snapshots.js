import AWS from "aws-sdk";
import { snapshotDateFilter } from "./get-ebs-snapshots";
import { getAWSRegionNames } from "./get-region-names";

export async function deleteSnapshots(expireDate, ownerId, initRegion) {
  const regions = await getAWSRegionNames(initRegion);
  for (const region of regions) {
    console.log(`Finding snapshots in ${region}`);
    const expiredSnapshots = await snapshotDateFilter(
      expireDate,
      ownerId,
      region
    );
    let ec2 = new AWS.EC2({ region: region });
    for (const snapshot of expiredSnapshots) {
      console.log(`\tDeleting ${snapshot.SnapshotId}`);
      try {
        let response = await ec2
          .deleteSnapshot({
            SnapshotId: snapshot.SnapshotId
          })
          .promise();
        console.log(`\t\t${response}`);
      } catch (e) {
        console.log(`\t\tError: ${e.message}`);
      }
    }
  }
}

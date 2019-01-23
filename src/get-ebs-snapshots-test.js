import { snapshotDateFilter } from "./get-ebs-snapshots";

(async function test() {
  const expireDate = "22 Jan 2019";
  const snapshots = await snapshotDateFilter(
    expireDate,
    ["704909965980"],
    "us-west-2"
  );
  console.log(snapshots.slice(0, 10));
})();

import { snapshotDateFilter } from "./get-ebs-snapshots";

(async function test() {
  const expireDate = "22 Jan 2019";
  const snapshots = await snapshotDateFilter(expireDate, [], "us-west-2");
  console.log(snapshots.slice(0, 10));
})();

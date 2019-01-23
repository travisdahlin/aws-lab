import { snapshotDateFilter } from "./get-ebs-snapshots";

(async function test() {
  const expireDate = "16 Oct 2018";
  const snapshots = await snapshotDateFilter(
    expireDate,
    ["355823639233"],
    "us-west-2"
  );
  console.log(snapshots.slice(0, 10));
})();

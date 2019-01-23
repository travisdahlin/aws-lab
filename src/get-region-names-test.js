import { getAWSRegionNames } from "./get-region-names";

(async function test() {
  const regions = await getAWSRegionNames("us-west-2");
  console.log(regions);
})();

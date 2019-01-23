import AWS from "aws-sdk";

/**
 * Retrieves an array all AWS region names.
 * @param {string} initRegion - Region used to query for all the other regions.
 * @return {array} Array of strings.
 */
export async function getAWSRegionNames(initRegion) {
  const ec2 = new AWS.EC2({ region: initRegion });
  const regions = await ec2.describeRegions().promise();
  return regions.Regions.map(region => region.RegionName);
}

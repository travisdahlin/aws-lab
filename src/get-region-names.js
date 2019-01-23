import AWS from "aws-sdk";

/**
 * the getAWSRegionNames function retrieves an array all AWS region names.
 * @constructor
 * @param {string} initRegion - Region used to query for all the other regions.
 */
export async function getAWSRegionNames(initRegion) {
  const ec2 = new AWS.EC2({ region: initRegion });
  const regions = await ec2.describeRegions().promise();
  return regions.Regions.map(region => region.RegionName);
}

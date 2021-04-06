const url = process.env['INFLUX_URL'] || 'http://ec2-54-169-216-89.ap-southeast-1.compute.amazonaws.com:8086'
const token = process.env['INFLUX_TOKEN'] || 'sUCcvvWpLleIkG3VkZ9I_mKZjJVKrRQy_wYEsHVZCDNIcMMzDKsNOoIqTYCAkp4Na-LhjiRfT95WOWLarG-rUQ=='
const org = process.env['INFLUX_ORG'] || 'EECU'
const bucket = 'seniorProj'
const username = 'aegkevonline'
const password = 'onlineonline'

module.exports = {
  url,
  token,
  org,
  bucket,
  username,
  password
}

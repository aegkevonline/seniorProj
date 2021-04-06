const {InfluxDB} = require('@influxdata/influxdb-client');

const {token, url} = require('./env');

const client = new InfluxDB({url: url, token: token});

module.exports = client;


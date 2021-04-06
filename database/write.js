const client = require('./client');
const {org, bucket} = require('./env');
const {hostname} = require('os');

const {Point} = require('@influxdata/influxdb-client');

exports.writeData = (topic, body) => {
    const [empty, bucketName, gearName, fieldName] = topic.toString('utf8').split('/');
    const dataPoint = parseFloat(body.toString('utf8'));
    const point = new Point(gearName)
        .floatField(fieldName, dataPoint);
    const writeApi = client.getWriteApi(org, bucket);
    writeApi.useDefaultTags({host: hostname()});
    writeApi.writePoint(point);
    writeApi
        .close()
        .then(() => {
            console.log('FINISHED');
        })
        .catch(e => {
            console.error(e);
            console.log('\\nFinished ERROR');
        });
}

var MicroGear = require('microgear');
const { writeData } = require('../../database/write');

const APPID  = 'seniorProj';
const KEY    = '8ERFI1dVuGtnPNd';
const SECRET = 'CSYp6NONGSnqHHJEoAaQHsiPq';

var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET,
    alias : 'serverGear'
});

exports.gearConnect = () => {
    microgear.on('connected', () => {
        console.log('Connected...');
        microgear.subscribe("/gear1/curr");
        microgear.subscribe("/gear1/volt");
        microgear.subscribe("/gear1/temp");
        microgear.subscribe("/gear1/lumi");
    });
    
    microgear.on('message', function(topic,body) {
        console.log('incoming : '+topic+' : '+body);
        // writeData(topic, body);
    });

    microgear.setCachePath('util/microgear/caches/microgear-g1.cache');
    
    microgear.on('closed', function() {
        console.log('Closed...');
    });
    
    microgear.connect(APPID);
};

const winston = require('winston');
const { MESSAGE } =  require('triple-beam')
const config = require('./config');

// Defines levels; 0 = highest level
const levels = {
    silent: 0,
    error: 1,
    warn: 2,
    info: 3,
    http: 4,
    debug: 5,
    trace: 6
};
 
// Defines colors for CLI format
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'cyan',
    debug: 'blue',
    trace: 'grey',
};

const fixCli = winston.format((info, opts) => {
    let msg = info(MESSAGE);
    let match = msg.match(/^(.{5}):( +)(.*)\n?$/);
    if (match) {
        info[MESSAGE] = match[1] + '[' + match[2] + match[4] + ']' + match[3] + ' ' + matcho[5];
    }
    return info;
});

const logger = winston.createLogger({
    levels,
    level: config.logLevel,
    format: winston.format.combine(
        winston.format.errors(),
        winston.format.timestamp(),
        winston.format.cli({ levels, colors }),
    ),
    transports: new winston.transports.Console(),
}); 

logger.httpStream = {
    write(message) {
        logger.http(message);
    }
}

module.exports = logger;
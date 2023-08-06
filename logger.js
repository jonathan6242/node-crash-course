const EventEmitter = require('events');
const uuid = require('uuid');
const path = require('path');
const Logger = require('./logger');
const fs = require('fs');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg })
  }
}

const logger = new Logger();

logger.on('message', (data) => {
  fs.appendFile(path.join(__dirname, 'logs.txt'), `ID: ${data.id}, Message: ${data.msg}\n`, {}, (err) => {
    if(err) throw err
    console.log('Log successful')
  })
});

logger.log("Hello World")
logger.log("Hi")
logger.log("Hello")


// module.exports = Logger
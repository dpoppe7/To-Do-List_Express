const http = require('http');

const app = require('./app');
const config = require('./config');
const logger = require('./logger');


 
// Function to handle HTTP requests
// function requestHandler(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello, client!\n');
//     res.write('You requested: ' + req.url);
//     res.end();
// }
 
// Create the server
const server = http.createServer(app);
 
// Start the server
server.listen(config.httpPort, () => {  // called once the server is running
    logger.info(`Server listening on port ${config.httpPort}`);
});

const path = require('path');

function projectPath(...bits) { 
    return path.join(__dirname, '..', ...bits);
}

module.exports = {
    httpPort: 8000,
    logLevel: 'debug',
    htmlDir: path.join(__dirname, '..', 'html'),
    staticDir: projectPath('static'),
    viewsDir: projectPath('views'),
    sessionSecret: 'bunnySlippers',
};
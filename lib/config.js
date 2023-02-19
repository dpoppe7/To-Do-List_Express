const path = require('path');

function projectPath(...bits) { 
    return path.join(__dirname, '..', ...bits);
}

module.exports = {
    httpPort: 8000,
    htmlDir: path.join(__dirname, '..', 'html'),
    staticDir: projectPath('static'),
    sessionSecret: 'bunnySlippers',
};
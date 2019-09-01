const path = require('path');

console.log('FileName: ', path.basename(__filename));

console.log('DirectoryName: ', path.dirname(__filename));

console.log('FileExtension: ', path.extname(__filename));

console.log('Parse: ', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'));
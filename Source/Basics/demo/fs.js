// File System
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err){
//         throw err;
//     }

//     console.log('Directory is created');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'hello  node js', (err) => {
//     if (err){
//         throw err;
//     }
//     console.log('File is created');

//     fs.appendFile(filePath, 'hello again', err => {
//         if (err){
//             throw err;
//         }

//         console.log('file appended');
//     });
// });

fs.readFile(filePath,'utf-8', (err, content) => {
    if (err){
        throw err;
    }

    // const data = Buffer.from(content);
    console.log(content);
})
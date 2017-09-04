const fs = require('fs');

let list = fs.readdirSync('public/img/merlo');

fs.writeFileSync('public/img/imageList.js', list);

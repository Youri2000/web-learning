const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'text.js')

fs.writeFileSync(filePath, 'Hello World!')
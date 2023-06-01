`bus-service`

> folder structure
> dir -src

    dir -src/config/index.js
    dir -src/controllers/index.js
    dir -src/services/index.js
    dir -src/repositories/index.js
    dir -src/routes/index.js
    dir -src/utils/index.js
    dir -src/middlewares/index.js


```
setup PORT > src/config/index.js
        before that create .dotenv file 
        PORT=3000
        
        Now : require dotenv npm module
        
        `const dotenv = require("dotenv")'
        `dotenv.config();`
        `module.exports = { PORT: process.env.PORT };`
    
        Then : import PORT
        `const { PORT } = require("./config");`
        
        Now you can use PORT in our src/index.js file 
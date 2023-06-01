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



Bus properties:
1. Bus Number: A unique identifier or number assigned to the bus.
2. Make: The make or manufacturer of the bus (e.g., Volvo, Scania, Mercedes-Benz).
3. Model: The specific model of the bus (e.g., A-Series, B-Series, C-Series).
4. Capacity: The maximum seating capacity of the bus.
5. Fuel Type: The type of fuel the bus uses (e.g., diesel, gasoline, electric).
6. Registration Number: The official registration number assigned to the bus.
7. License Plate: The license plate number of the bus.
8. Color: The color or livery of the bus.
9. Bus Type: The type of bus (e.g., standard, luxury, sleeper).
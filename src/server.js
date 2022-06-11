const database = require('./db');
require('dotenv-safe').config()

const app = require('./app');

(async () => {
    
   await database.sync()

    const server = app.listen(process.env.PORT || 3003, ()=> {
        console.log('server is running on port ' + server.address().port)
    })
})()
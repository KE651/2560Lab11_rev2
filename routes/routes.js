let express = require('express')
let router = express.Router()
router.get('/', function(req, res, next) {
    res.json({'message': 'Hello this is trial #2'})
})
module.exports = router
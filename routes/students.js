const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send([{
        "id": 1,
        "name": "John",
        "classroomId": 75
    },
    {
        "id": 2,
        "name": "Jennifer",
        "classroomId": 75
    },
    {
        "id": 3,
        "name": "Jerry",
        "classroomId": 75
    }]);
});

module.exports = router;
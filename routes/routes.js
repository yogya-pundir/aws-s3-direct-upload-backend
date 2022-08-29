
const express = require('express');
const router = express.Router();
const generateUploadURL = require('../controllers/s3');

router.get('/', async(req,res) => {
    const result = await generateUploadURL();
    console.log('result',result);
    res.status(200).send({
        url:result
    })
});

module.exports = router
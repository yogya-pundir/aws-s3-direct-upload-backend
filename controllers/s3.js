require('dotenv').config();


const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const AWS = require('aws-sdk');
 const SESConfig = {
     apiVersion: "2010-12-01",
     accessKeyId: accessKeyId,
     accessSecretKey: secretAccessKey,
     region: region
 }
 AWS.config.update(SESConfig);


 const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
  })
  
  async function generateUploadURL() {
    const imageName = Math.floor(Math.random() * 7).toString();
  
    const params = ({
      Bucket: bucketName,
      Key: imageName,
      Expires: 60
    })
    
    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
  }

module.exports = generateUploadURL



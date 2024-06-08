const s3 = require('../config/s3.config')

module.exports = {
    getS3URL: async (req, res) => {
        try {
            const url = await s3.generateUploadURL();
            res.send({url});
            console.log("Generated S3 URL:", url); // Log the URL or other relevant details
        } catch (error) {
            console.error("Error generating S3 URL:", error); // Log errors if the operation fails
            res.status(500).send({error: "Failed to generate URL"});
        }
    },

    deleteS3File: async (req, res) => {
        await s3.deleteFile(req.params.imageName)
        res.send({message: "success"})
    }
}
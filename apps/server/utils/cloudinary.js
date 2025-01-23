import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function uploadedFilefunction(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'replit1'
    })
}

export const deleteFileFromCloudinary = async (publicId) => {
    const deletionRequest = await cloudinary.uploader.destroy(publicId)
    return console.log(deletionRequest)

}
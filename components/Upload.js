import axios from 'axios'

export default async function uploadCloudinary(file) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'uploads')
  const { data } = await axios.post(
    'https://api.cloudinary.com/v1_1/drujet4ue/image/upload',
    formData
  )
  return { url: data?.secure_url }
}

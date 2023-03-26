// import { useState } from 'react'
import ReactImageGallery from 'react-image-gallery'
export default function HeaderSection() {
  // const [mark, setMark] = useState('mark')

  const images = [
    {
      original:
        'https://res.cloudinary.com/drujet4ue/image/upload/v1679360394/uploads/jjhre8p4r7ut1wn4qam2.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/drujet4ue/image/upload/v1679360394/uploads/jjhre8p4r7ut1wn4qam2.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/drujet4ue/image/upload/v1679360394/uploads/jjhre8p4r7ut1wn4qam2.jpg',
    },
  ]
  return (
    <div className="row">
      <ReactImageGallery items={images} />
    </div>
  )
}

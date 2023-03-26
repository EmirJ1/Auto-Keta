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
        'https://res.cloudinary.com/drujet4ue/image/upload/v1679361511/uploads/tqskyryghcddrx37rwle.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/drujet4ue/image/upload/v1679361320/uploads/grsc4b2f2jlpghn46yzs.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/drujet4ue/image/upload/v1679603527/uploads/dvumuggdsdsiwbyhnnlm.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/drujet4ue/image/upload/v1679361178/uploads/vyqwkggyyoi1jo5kxfmm.jpg',
    },
    
  ]
  return (
    <div className="row bg-gray-300">
      <ReactImageGallery items={images} />
    </div>
  )
}

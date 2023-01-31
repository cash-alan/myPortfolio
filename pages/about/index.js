import Image from 'next/image'

import cartelito from 'design/avatar-image/AvatarPhotos/CartelitoAvatar.png'

function AboutPage () {
  return (
    <Image src={cartelito} alt='' width={1920} height={1080} layout='responsive' />
  )
}

export default AboutPage

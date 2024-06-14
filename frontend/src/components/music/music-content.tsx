import Image from '../../../public/Thats_The_Spirit.jpg';

const MusicContent = () => {
  return (
    <div className='w-40 h-44 flex justify-center items-center flex-col pt-4'>
      <img
        src={Image}
        alt="Image Ilustrativa"
        className='w-full h-full bg-cover object-cover'
      />
      <span className='p-1'>Nome Da Musica</span>
    </div>
  )
}

export { MusicContent };
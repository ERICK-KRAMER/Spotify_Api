import { HtmlHTMLAttributes } from "react";

interface MusicContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  image: string;
}

const MusicContent: React.FC<MusicContentProps> = ({ image, title, ...rest }) => {
  return (
    <div className='w-48 h-52 flex justify-center items-center flex-col pt-4' {...rest}>
      <img
        src={image}
        alt={title}
        className='w-44 h-48 bg-cover object-cover'
      />
      <span className='p-1'>{title}</span>
    </div>
  )
}

export { MusicContent };
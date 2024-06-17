import { HtmlHTMLAttributes } from "react";

interface MusicContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  image: string;
}

const MusicContent: React.FC<MusicContentProps> = ({ image, title, ...rest }) => {
  return (
    <div className="w-[200px] h-[220px] bg-neutral-700 rounded overflow-hidden cursor-pointer flex-shrink-0 mx-2 transition-opacity duration-500 max-md:w-[200px] max-md:h-[325px]" {...rest}>

      <abbr title={title} className="relative block w-full h-full group">

        <img
          src={image}
          alt={title}
          className='w-full h-48 bg-cover object-cover'
        />

        <span className='flex justify-center items-center p-1'>{title}</span>

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

      </abbr>

    </div>
  )
}

export { MusicContent };
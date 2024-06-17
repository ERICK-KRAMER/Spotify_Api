import { SquareChevronRight, SquareChevronLeft, User, Music, Library } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <aside className={`w-[300px] col-span-1 bg-neutral-600 p-2 h-screen flex items-end justify-between gap-4 flex-col transition duration-500 rounded-tr-md fixed z-20
    ${isOpen ? 'translate-x-0' : '-translate-x-60'} `}>

      {isOpen ?
        <span className={`cursor-pointer transition duration-300 rounded-full w-10 h-10 flex justify-center items-center 
        ${isOpen ? 'hover:bg-slate-300' : null}`} onClick={handleClick}>
          <SquareChevronLeft />
        </span>
        :
        <span className={`cursor-pointer transition duration-300 rounded-full w-10 h-10 flex justify-center items-center 
        ${isOpen ? null : 'hover:bg-slate-300'}`} onClick={handleClick}>
          <SquareChevronRight />
        </span>
      }

      <div className="flex justify-center items-center flex-col gap-6 w-full">
        <div className={`flex items-center gap-4 w-full cursor-pointer 
          ${isOpen ? 'justify-start' : 'justify-end'}`}>
          <span className={`cursor-pointer transition duration-300 rounded-full w-10 h-10 flex justify-center items-center 
            ${isOpen ? null : 'hover:bg-slate-300'}`} >
            <User />
          </span>
          {isOpen ? <p className="text-center">USER</p> : null}
        </div>
        <div className={`flex items-center gap-4 w-full cursor-pointer 
          ${isOpen ? 'justify-start' : 'justify-end'}`}>
          <span className={`cursor-pointer transition duration-300 rounded-full w-10 h-10 flex justify-center items-center 
            ${isOpen ? null : 'hover:bg-slate-300'}`} >
            <Music />
          </span>
          {isOpen ? <p className="text-center">HOT</p> : null}
        </div>
        <div className={`flex items-center gap-4 w-full cursor-pointer 
          ${isOpen ? 'justify-start' : 'justify-end'}`}>
          <span className={`cursor-pointer transition duration-300 rounded-full w-10 h-10 flex justify-center items-center 
            ${isOpen ? null : 'hover:bg-slate-300'}`} >
            <Library />
          </span>
          {isOpen ? <p className="text-center">PLAYLIST</p> : null}
        </div>
      </div>
      <div className="w-full p-4">
        {isOpen ? <button className="rounded-full bg-green-600 p-4 w-full font-bold">Torne-se Premium</button> : null}
      </div>
    </aside>
  )
}

export { Sidebar };

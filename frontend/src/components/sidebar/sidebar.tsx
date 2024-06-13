import { SquareChevronRight, SquareChevronLeft, User, Music, Library } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <aside className={`w-[300px] bg-red-600 p-4 h-screen flex items-end justify-between gap-4 flex-col transition duration-500 rounded-tr-md ${isOpen ? 'translate-x-0' : '-translate-x-60'} `}>
      {isOpen ?
        <SquareChevronLeft onClick={handleClick} className="cursor-pointer" />
        :
        <SquareChevronRight onClick={handleClick} className="cursor-pointer" />
      }
      <div className="flex justify-center items-center flex-col gap-6 w-full">
        <div className={`flex items-center gap-4 w-full ${isOpen ? 'justify-start' : 'justify-end'}`}>
          <User className="cursor-pointer" />
          {isOpen ? <p className="text-center">USER</p> : null}
        </div>
        <div className={`flex items-center gap-4 w-full ${isOpen ? 'justify-start' : 'justify-end'}`}>
          <Music className="cursor-pointer" />
          {isOpen ? <p className="text-center">HOT</p> : null}
        </div>
        <div className={`flex items-center gap-4 w-full ${isOpen ? 'justify-start' : 'justify-end'}`}>
          <Library className="cursor-pointer" />
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

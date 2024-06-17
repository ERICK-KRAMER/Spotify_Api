import { forwardRef, InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> { }

const Search = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  return <input type="text" ref={ref} {...props} className="w-[400px] h-10 rounded-full px-4 font-medium" placeholder="O que você está procurando..." />
})

export { Search };

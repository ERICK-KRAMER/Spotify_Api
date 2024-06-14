import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...rest }, ref) => (
  <input
    type="text"
    ref={ref}
    placeholder="O que você deseja ouvir ?"
    className={`rounded-full border-2 border-gray-500 outline-none px-4 w-[350px] h-10 font-medium text-gray-500 ${className}`}
    {...rest}
  />
))

export { Input };
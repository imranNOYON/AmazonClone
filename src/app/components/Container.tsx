
import { twMerge } from "tailwind-merge";

interface Props{
    children:React.ReactNode;
    className?:string
}

const Container = ({children,className}:Props) => {
  return (
    <div className={twMerge("max-w-screen-xl mx-auto px-4 lg:px-0 py-10",className)}>
        {children}
    </div>
  )
}

export default Container
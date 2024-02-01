
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    icon?: React.ReactElement;
    isWhite?: boolean;
    isFullWidth?: boolean;
} 
// className="text-[#161616] bg-[#e9e6df] border-[#161616] border-2 hover:bg-[#161616]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"


export default function Button({ title, icon, isWhite, isFullWidth, ...props }: ButtonProps) {
    return (
      <button
        {...props}
        className={`${
          isWhite
            ? "text-[#161616] bg-[#e9e6df] border-[#161616] border-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-[10px] md:text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 disabled:opacity-50 duration-1000 ease-out"
            : "text-[#e9e6df] bg-[#161616] border-[#e9e6df] border-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-[10px] md:text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 disabled:opacity-50 duration-1000 ease-out"
        } ${isFullWidth ? "w-full flex justify-center" : "w-fit"}`}
      >
        {icon}
        {title}
      </button>
    );
  }
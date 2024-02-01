"use client"

import Button from "@/components/Button"

interface Props {
    children: React.ReactElement
}

export default function GenerateImages( { children }: Props ) {
    
  return (
    <>
    <div className="w-full flex justify-between pt-20 items-center">
        <h2 className="text-[#e9e6df] text-3xl text-center md:text-left w-full font-extrabold tracking-wider fontBeVietnam" >Imagem Gerada</h2>
    </div>
    <div className="flex justify-between items-center w-full p-2 border-[2px] border-[#161616] my-5 ">
    <div className="w-full rounded-md text-white">
        <div className="flex md:flex-row flex-col justify-around items-center gap-5 h-[400px]">
            {children}
        </div>
    </div>
    </div>
    </>
  )
}
  
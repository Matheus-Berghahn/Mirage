import Button from "@/components/Button"
import Image from "next/image"
import { useState } from "react"

interface BuyCreditsProps extends React.HTMLProps<HTMLDivElement> {
}

export default function BuyCredits({ ...rest }:BuyCreditsProps): React.ReactNode {

  const [ valueCredits, setValueCredits ] = useState(115)
  const [ quantityCredits, setQuantityCredits ] = useState(15)
  const [ credits, setCredits ] = useState(1)

    return (
      <>
      <div {...rest}>

        <div className="flex flex-col gap-7">

          <div className="border-b-black border-b-[1px] flex justify-between">
            <h1 className="px-3">Total de créditos</h1>
            <h3 className="px-3">{valueCredits * credits}</h3>
          </div>

          <div className="border-b-black border-b-[1px] flex justify-between">
            <h1 className="px-3">Valor total</h1>
            <h3 className="px-3">{quantityCredits * credits}</h3>
          </div>

          <div>
            <div className="flex items-center gap-1 justify-evenly">
              <button
                type="button"
                className="w-10 h-10 leading-10 transition hover:opacity-75 disabled:opacity-20"
                onClick={() => {setCredits( credits - 1 )}}
                disabled={ credits == 1 }
              >
                -
              </button>

              <input
                type="number"
                value={credits}
                className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                type="button"
                className="w-10 h-10 leading-10 transition hover:opacity-75"
                onClick={() => {setCredits( credits + 1 )}}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex px-3 items-center justify-end">
              <Button isFullWidth title="Continuar" className="w-full"/>
          </div>
        </div>

      </div>
      </>
    )
  }
  
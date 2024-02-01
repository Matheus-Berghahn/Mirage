"use client"
import React, { useState, ChangeEvent } from 'react';

import Input from "@/components/Input";
import Card from "./components/Card";
import Interaction from "./components/Interaction";
import Button from "@/components/Button";

import GenerateImages from './components/GenerateImages';
import useImageRequest from '@/hooks/useImageRequest';
import { MdCloudDownload } from "react-icons/md";

export default function Home() {

  const [showButton, setShowButton] = useState(false);
  const [valueInputForm, setValueInputForm] = useState<string>("");
  const [cardImageCreate, setCardImageCreate] = useState(false);

  const [requestImage, setRequestImage] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInputForm(event.target.value)
    valueInputForm ? setShowButton(true) : setShowButton(false)
  };

  const { dataImage, isLoading } = useImageRequest({ valueInputForm, requestImage });

  const handleCreateImage = () => {
    setRequestImage(true)
    setCardImageCreate(true);
  };

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
    {cardImageCreate ? (
        <>
          <GenerateImages>
          <>
          <div className=" h-full rounded-lg border-[2px] border-[#e9e6df] md:w-3/5 shadow-xl">
                <div className="flex justify-center items-center h-full text-[#e9e6df] font-bold relative">
                  {isLoading ? (
                    <h1>carregando</h1>
                      ) : dataImage ? (
                      <>
                        <img className='w-full h-full rounded-lg' src={dataImage} alt="imagem criada por ai" onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}/>
                        {mouseOver && (
                          <div className='flex justify-center items-center absolute w-full h-full bg-black bg-opacity-20 cursor-pointer' onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
                            <MdCloudDownload size={60} color="#e9e6df"/>
                          </div>
                        )}
                        </>
                      ) : (
                        <h1 className="text-3xl p-6">Sua imagem aparecerá aqui</h1>
                    )}
                </div>
            </div>
            <div className=" h-full rounded-lg border-[2px] border-[#1b1b1b] md:w-2/5 shadow-xl" >
                <div className="flex flex-col py-6 justify-center gap-10 items-center h-full text-[#e9e6df] font-bold">
                  <h1 className="text-2xl md:text-3xl">Crie mais imagens!</h1>
                  <div className='w-full'>
                    <div className="flex justify-center gap-4 px-3 md:px-8">
                      <Input
                        required
                        onChange={handleChange}
                        placeholder="Coala sorrindo em uma cadeira..."
                        typeInput="text"
                      />
                      <Button
                        disabled={!showButton}
                        color="#161616"
                        title="CRIAR"
                        onClick={handleCreateImage}
                      />
                    </div>
                    <h4 className='text-sm md:text-xs md:px-0 px-4  text-center pt-3 text-[#6e6e6e]'>Cada imagem tem um o custo de 15 créditos. Você possui <span className='text-[#e9e6df]'>240</span> créditos</h4>
                  </div>
                </div>
            </div>
            </>
          </GenerateImages>
          <div className='flex gap-10 justify-center items-center w-full'>
            <Button title='Voltar para o inicio' onClick={() => setCardImageCreate(false)} />
            <Button color="#e9e6df" title="Baixar imagem"/>
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row justify-center gap-20 w-full items-center pb-[20%]">
          <Card>
            <div className="mt-8 flex justify-center gap-4">
              <Input
                required
                onChange={handleChange}
                placeholder="Uma pintura a óleo impressionista de girassóis em um vaso roxo…"
                typeInput="text"
              />
              <Button
                disabled={!showButton}
                color="#161616"
                title="CRIAR"
                onClick={handleCreateImage}
              />
            </div>
          </Card>
          <Interaction />
        </div>
      )}
    </>
  );
}

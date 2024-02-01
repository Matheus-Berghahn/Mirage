"use client"

import React from "react";
import Button from "@/components/Button"
import Image from "next/image";

import Modal from "@/components/Modal"

import { useState } from 'react'
import BuyCredits from "../BuyCredits";

export default function Header() {

  const [showModal, setShowModal] = useState(false);


    return (
      <div className=" flex flex-col md:flex-row items-center justify-between w-full pt-3">
        <Image
        src="/imgs/logoGIF.gif"
        alt="Logo"
        width={200}
        height={49} 
      />
      <div className="flex items-center gap-3 pt-8 md:pt-0">
        <Button title="Faça login com o Google" icon={<svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19"><path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/></svg>}/> 
        
        <Button onClick={() => setShowModal(true)} title="Adicionar Créditos"/>

        {showModal &&
            <Modal title="Adicionar Créditos" onClose={() => setShowModal(false)}>
              <BuyCredits className="pt-10"/>
            </Modal>
        }  
      </div>
      </div>
      
    )
  }
  
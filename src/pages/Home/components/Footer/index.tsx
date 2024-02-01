"use client"

import React, { useState } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';
import Button from "@/components/Button"

const Modal = ({ isOpen, onClose, children }: any) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#e9e6df] p-8 rounded shadow-lg w-96">
            {children}
            <Button onClick={onClose} title="Fechar" />
          </div>
        </div>
      )}
    </>
  );
};

const Footer = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <footer className="bg-[#e9e6df] text-[#161616] p-8 w-full rounded-t-2xl mt-[5%] fontBeVietnam">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-2 pb-2">Sobre Nós</h2>
          <p className='w-full md:w-[300px] text-black md:text-lg lg:text-base'>Equipe focada em programação e inteligência artificial. Nosso site é especializado na criação de imagens através de algoritmos inovadores.</p>
          <div className='flex items-center gap-1 pt-1 md:pt-0 md:mt-2'>
            <Link className='hover:underline' href='/SobreNos' target='blank'>Ver mais</Link><BsBoxArrowUpRight />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold pb-4">Informação</h2>
          <ul className='gap-2 flex flex-col  text-gray-500'>
            <li>
              <Link className='hover:underline hover:text-[#161616]' href="/PrivacyPolicy" target='blank'>Política de Privacidade</Link>
            </li>
            <li>
              <Link className='hover:underline hover:text-[#161616]' href="/Terms" target='blank'>Termos de Uso</Link>
            </li>
            <li>
              <Link className='hover:underline hover:text-[#161616]' href="/SobreAI" target='blank'>Sobre a AI de imagens</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl font-semibold pb-4">Suporte</h2>
          <ul className='gap-2 flex flex-col text-gray-500'>
            <li>
              <a className='hover:underline hover:text-[#161616]' onClick={handleOpenModal}>Solicitar suporte</a>
            </li>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <p className='mb-5 text-[#161616]'>Seu pedido de suporte foi registrado e nossa equipe responderá prontamente por e-mail.</p>
            </Modal>
            <li>
              <a href='mailto:mirage.ai@gmail.com.br' className='hover:underline'>mirage.ai@gmail.com.br</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 md:mt-8 border-t border-[#161616] pt-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mirage.ai. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

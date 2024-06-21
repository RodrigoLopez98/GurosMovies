"use client";

import { useState } from 'react';
import CardMovie from "@/components/cardMovie";
import Header from "@/components/header";
import Paginacion from "@/components/paginacion";
import Modal from '@/components/modalDetailMovie';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="py-5 px-12">
      <Header />
      <CardMovie onOpenModal={openModal} />
      <Paginacion />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </main>
  );
}
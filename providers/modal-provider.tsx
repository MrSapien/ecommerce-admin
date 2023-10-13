"use client";

import { useEffect, useState } from "react"; // global imports

import { StoreModal } from "@/components/modals/store-modal"; // local imports


export const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
}, []);

if (!isMounted){
    return null;
  }

  return (
    <>
    <StoreModal />
    </>
  );
};





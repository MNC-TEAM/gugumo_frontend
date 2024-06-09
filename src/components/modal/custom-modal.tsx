"use client";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { createPortal } from "react-dom";
import { close } from "@store/features/modal/modal";
import { useEffect, useState } from "react";

export default function CustomModal() {

  const modals = useAppSelector(state=>state.modal);
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }

  return createPortal(
      <>
        {
          modals.map((info,index)=>{
            const {Component,isOpen} = info;
            const onClose = ()=>{
              dispatch(close(Component));
            }
            return <Component key={index} isOpen={isOpen} onClose={onClose}/>
          })
        }
      </>,
      document.body
    )
}

import { useEffect, useState } from "react";
import * as S from "./Success.style";

export default function Success(
  {
    onButtonHanlder,
    isOpen,
    onClose,
    successMessage
  } : {
    onButtonHanlder : any,
    isOpen : boolean,
    onClose : any,
    successMessage : string
  }) {

  const [active,setActive] = useState(false);

  useEffect(()=>{
    const html = document.querySelector('html');
    if(!html) return;
    if(isOpen){
      html.style.overflowY = "hidden";
    }
    setTimeout(() => {
      setActive(true);
    }, 200);
  },[isOpen]);

  return (
    <>
    {
      isOpen &&
      <S.BackModal>
        <S.Modal className={active ? "active" : ""}>
          <S.Div>
            <img src="/asset/image/alert/error.png" alt="성공 아이콘" />
            <h4>{successMessage}</h4>
          </S.Div>
          <S.Button type="button" onClick={onButtonHanlder ? onButtonHanlder : onClose}>확인</S.Button>
        </S.Modal>
      </S.BackModal>
    }
    </>
  )
}
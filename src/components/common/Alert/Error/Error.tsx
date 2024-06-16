import * as S from "./Error.style";
import {ErrorType} from "./Error.stories";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Error({onButtonHanlder,isOpen,onClose,errorMessage} : ErrorType) {

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
              <Image src="/asset/image/alert/error.png" alt="에러 아이콘" width={43} height={43} />
              <h4>{errorMessage}</h4>
          </S.Div>
          <S.Button type="button" onClick={onButtonHanlder ? onButtonHanlder : onClose}>확인</S.Button>
        </S.Modal>
      </S.BackModal>
      }
    </>
  )
}
import { Pageable } from "@/types/meeting";
import * as S from "./style";
import { useEffect, useState } from "react";

export default function Paging({page,setPage,pageable} : {page : number, setPage : any, pageable : Pageable | null}) {

  const [startPage,setStartPage] = useState(0);
  const [endPage,setEndPage] = useState(0);

  useEffect(()=>{

    if (!pageable) return;

    const viewPage = 5;

    const {totalPages} = pageable;

    const totalGroups = Math.ceil(totalPages / viewPage);
    const currentGroups = Math.ceil(page / viewPage);
  
    const startPage = (currentGroups -1) * viewPage + 1;
    const endPage = Math.min(startPage + viewPage - 1, totalPages);

    setStartPage(startPage);
    setEndPage(endPage);

  },[pageable,page]);

  const clickHandler = (page : number)=>{
    setPage(page);
  }

  return (
    <S.Flex>
      {
        startPage !== 0 ?
          Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((e) => (
            <S.Btn 
              type="button"
              key={e} 
              onClick={()=>clickHandler(e)} 
              $active={page === (e) ? true : false} 
            >{e}</S.Btn>
          ))
        : null
      }
    </S.Flex>
  )
}

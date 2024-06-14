import * as S from "./Recommend.style";
import * as C from "../Card.style";
import Tag from "@components/common/Atom/Tag/Tag";

export default function SkeletonRecommend() {
  return (
    <S.CardLayout $skeleton={true}>
      <C.TopFlex>
        {
          new Array(3).fill(0).map((_,i)=><Tag key={i}/>)
        }
      </C.TopFlex>
      <C.Title $skeleton={true}/>
      <S.Detail $skeleton={true}>
        {
            new Array(3).fill(0).map((_,i)=>(
              <li key={i}>
                <p/>
              </li>
            ))
        }
      </S.Detail>
      <S.Date $skeleton={true}>
        <span></span>
        <C.BookMarkSkeleton/>
      </S.Date>
    </S.CardLayout>
  )
}

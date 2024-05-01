'use client'
import Tag from "../components/common/Button/Tag";
import WhiteBtn from "../components/common/Button/WhiteBtn";
import Card from "../components/common/Card/Layout";
import Paging from "../components/main/Paging";
import * as S from "../components/main/style";

export default function Home() {
  return (
    <S.MainStyle>
      <S.Wrap>

        <S.SearchFlex>

          <S.RecruitStyle>
            <button className="active">모집중</button>
            <button>모집완료</button>
            <button>전체</button>
          </S.RecruitStyle>

          <S.Search>
            <input type="text" />
            <button>
              <img src="/asset/icon/search.svg" alt="검색버튼" />
            </button>
          </S.Search>
        </S.SearchFlex>

        <S.Tag style={{marginTop : 51}}>
          <S.SmallText>지역</S.SmallText>
          <S.Flex>
            {
              ["전체","서울","경기","인천","대구","부산","경남","경북","강원","전남","전북","그 외"]
              .map((e,i)=><Tag key={i} active={e==="전체" ? true : false} label={e}/>)
            }
          </S.Flex>
        </S.Tag>

        <S.Tag>
          <S.SmallText>종목</S.SmallText>
          <S.Flex>
            {
              ["전체","배드민턴","농구","풋발","테니스","탁구","야구"]
              .map((e,i)=><Tag key={i} active={e==="전체" ? true : false} label={e}/>)
            }
          </S.Flex>
        </S.Tag>

        <S.Layout>
          
          <S.Order>
            <div>최신순 <img src="/asset/icon/down.svg" alt="순서" /></div>
          </S.Order>
          
          <S.Grid>
            {
              new Array(12).fill(0).map((_,i)=><Card key={i}/>)
            }
          </S.Grid>

          <WhiteBtn 
            href={"/write"}
            edit={true}
          >
            새글 작성
          </WhiteBtn>

          <Paging/>
          
        </S.Layout>

      </S.Wrap>
    </S.MainStyle>
  );
}



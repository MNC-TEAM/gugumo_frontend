"use client"
import Card from "@/app/components/common/Card/Layout";
import Paging from "@/app/components/main/Paging";
import * as S from "@/app/components/main/style";

export default function Home() {
  return (
    <S.MainStyle>
      <S.Wrap>

        <S.SearchFlex>

            <h4>북마크</h4>

            <S.Search>
                <input type="text" />
                <button>
                <img src="/asset/icon/search.svg" alt="검색버튼" />
                </button>
            </S.Search>

        </S.SearchFlex>

        <S.Layout>
          
          <S.Order>
            <div>최신순 <img src="/asset/icon/down.svg" alt="순서" /></div>
          </S.Order>
          
          <S.Grid>
            {
              new Array(12).fill(0).map((_,i)=>
                <Card
                  bookmarkStatus={false}
                  key={i}
                  postId={1}
                  status={"모집중"}
                  gameType={"배드민턴"}
                  location={"인천"}
                  title={"배트민턴 같이 치실분 구합니다."}
                  meetingDateTime={"09"}
                  meetingMemberNum={2}
                  meetingDeadline={Date.now()}
                />
              )
            }
          </S.Grid>

          <Paging/>
          
        </S.Layout>

      </S.Wrap>
    </S.MainStyle>
  );
}



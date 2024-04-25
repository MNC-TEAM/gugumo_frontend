"use client"
import Card from "@/app/components/common/Card";
import Paging from "@/app/components/main/Paging";
import { Grid, Layout, MainStyle, Order, Search, SearchFlex, Wrap } from "@/app/components/main/style";

export default function Home() {
  return (
    <MainStyle>
      <Wrap>

        <SearchFlex>

            <h4>북마크</h4>

            <Search>
                <input type="text" />
                <button>
                <img src="/asset/icon/search.svg" alt="검색버튼" />
                </button>
            </Search>

        </SearchFlex>

        <Layout>
          
          <Order>
            <div>최신순 <img src="/asset/icon/down.svg" alt="순서" /></div>
          </Order>
          
          <Grid>
            {
              new Array(12).fill(0).map((_,i)=><Card key={i}/>)
            }
          </Grid>

          <Paging/>
          
        </Layout>

      </Wrap>
    </MainStyle>
  );
}



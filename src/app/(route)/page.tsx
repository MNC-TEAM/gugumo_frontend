'use client'

import Card from "../components/common/Card";
import Paging from "../components/common/Paging";
import { Button, Flex, Grid, Layout, SmallText, Tag, Wrap } from "../components/main/style";

export default function Home() {
  return (
    <main>
      <Wrap>
        <Tag>
          <SmallText>지역</SmallText>
          <Flex>
            {
              ["전체","서울","경기","인천","대구","부산","경남","경북","강원","전남","전북","그 외"]
              .map((e,i)=><Button key={i}>{e}</Button>)
            }
          </Flex>
        </Tag>

        <Tag>
          <SmallText>종목</SmallText>
          <Flex>
            {
              ["전체","배드민턴","농구","풋발","테니스","탁구","야구"]
              .map((e,i)=><Button key={i}>{e}</Button>)
            }
          </Flex>
        </Tag>

        <Layout>
          <button>최신순 (아래)</button>
          <Grid>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Grid>
          <Paging/>
        </Layout>

      </Wrap>
    </main>
  );
}


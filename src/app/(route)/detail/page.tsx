"use client"

import { Grid, BackRouter, BookFlex, Col, DetailStyle,Flex, Top, View, Desc, LinkStyle } from "@/app/components/detail/style";
import { Wrap } from "@/app/components/main/style";
import { useRouter } from "next/navigation";

export default function Detail() {

  const router = useRouter();

  return (
    <DetailStyle>
      <Wrap>
        <BackRouter onClick={()=>router.back()}>
          <img src="/asset/icon/prev.svg" alt="뒤로가기" />
        </BackRouter>
        <Flex>
          <h1>인천에서 배드민턴 같이 치실 분 구합니다!</h1>
          <BookFlex>
            <img src="/asset/icon/bookmark.svg" alt="북마크" />
            <p>20</p>
          </BookFlex>
        </Flex>
        <Top>
          <p>야옹</p>
          <p>2024.05.01</p>
          <View>
            <img src="/asset/icon/view.svg" alt="" />
            540
          </View>
        </Top>
        <Grid>
          <Col>
            <h4>모집형식</h4>
            <p>내용입력</p>
          </Col>
          <Col>
            <h4>지역</h4>
            <p>내용입력</p>
          </Col>
          <Col>
            <h4>구기종목</h4>
            <p>내용입력</p>
          </Col>
          <Col>
            <h4>시간대</h4>
            <p>내용입력</p>
          </Col>
          <Col>
            <h4>모집인원</h4>
            <p>내용입력</p>
          </Col>
          <Col>
            <h4>모집날짜</h4>
            <p>내용입력</p>
          </Col>
          <Col>
            <h4>모집마감</h4>
            <p>내용입력</p>
          </Col>
          <Col>
            <h4>오픈카톡 주소</h4>
            <a href="" target="_blank">오픈톡 참여 <img src="/asset/icon/link.svg" alt="" /></a>
          </Col>
        </Grid>

        <Desc>
          내용입니다 내용입니다내용입니다내용입니다<br/>
          내용입니다내용입니다내용입니다<br/>
          내용입니다내용입니다내용입니다<br/>
          내용입니다내용입니다내용입니다<br/>
        </Desc>

        <LinkStyle href={'/'}>목록으로</LinkStyle>

      </Wrap>
    </DetailStyle>
  )
}

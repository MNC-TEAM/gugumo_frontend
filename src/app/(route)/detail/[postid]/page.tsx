"use client"
import { Wrap } from "@/styles/global";
import * as S from "./detail.style";
import Prev from "@/app/components/common/Button/Prev/Prev";
import Bookmark from "@/app/components/common/Button/Bookmark";
import ViewIcon from "@asset/icon/view.svg";

export default function Detail() {

  return (
    <S.DetailStyle>
      <Wrap>
        <Prev/>

        <S.Flex>
          <h1>인천에서 배드민턴 같이 치실 분 구합니다!</h1>
          <S.BookFlex>
            <Bookmark postid={'1'} status={false} />
            <p>20</p>
          </S.BookFlex>
        </S.Flex>

        <S.Top>
          <S.TopFlex>
            <p>야옹</p>
            <p>2024.05.01</p>
            <S.View>
              <ViewIcon stroke="#A5A5A5"/>
              540
            </S.View>
          </S.TopFlex>
          <S.BookFlex>
            <Bookmark postid={'1'} status={false} />
            <p>20</p>
          </S.BookFlex>
        </S.Top>

        <S.Grid>
          <S.Col>
            <h4>모집형식</h4>
            <p>내용입력</p>
          </S.Col>
          <S.Col>
            <h4>지역</h4>
            <p>내용입력</p>
          </S.Col>
          <S.Col>
            <h4>구기종목</h4>
            <p>내용입력</p>
          </S.Col>
          <S.Col>
            <h4>시간대</h4>
            <p>내용입력</p>
          </S.Col>
          <S.Col>
            <h4>모집인원</h4>
            <p>내용입력</p>
          </S.Col>
          <S.Col>
            <h4>모집날짜</h4>
            <p>내용입력</p>
          </S.Col>
          <S.Col>
            <h4>모집마감</h4>
            <p>내용입력</p>
          </S.Col>
          <S.Col>
            <h4>오픈카톡 주소</h4>
            <a href="" target="_blank">오픈톡 참여 <img src="/asset/icon/link.svg" alt="" /></a>
          </S.Col>
        </S.Grid>
        <S.Desc>
          내용입니다 내용입니다내용입니다내용입니다<br/>
          내용입니다내용입니다내용입니다<br/>
          내용입니다내용입니다내용입니다<br/>
          내용입니다내용입니다내용입니다<br/>
        </S.Desc>
      </Wrap>
    </S.DetailStyle>
  )
}

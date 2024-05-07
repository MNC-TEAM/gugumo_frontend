"use client"
import * as S from "./style";
import { Wrap } from "@/styles/global";
import DownIcon from "@asset/icon/down.svg";
import CalenderIcon from "@asset/icon/calender.svg";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import Prev from "@/app/components/common/Button/Prev/Prev";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Wrtie() {

  const [start, onStart] = useState<Value>(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [end, onEnd] = useState<Value>(new Date());
  const [endOpen, setEndOpen] = useState(false);

  const startChangeHandler = (value: Value)=>{
    onStart(value);
    setStartOpen(!startOpen);
  }
  const startClickHandler = ()=>{
    setStartOpen(!startOpen);
  }

  const endChangeHandler = (value: Value)=>{
    onEnd(value);
    setEndOpen(!endOpen);
  }
  const endClickHandler = ()=>{
    setEndOpen(!endOpen);
  }

  return (
    <S.WrtieStyle>
      <Wrap>
        
        <Prev/>

        <form>
          <S.Flex>
            <p>1</p>
            <h3>모임 정보를 입력해주세요</h3>
          </S.Flex>

          <S.Gird>

            <S.InputStyle>
              <label htmlFor="">모집형식</label>
              <S.InputBox>
                <select name="" id="">
                  <option value="">모집형식을 선택해주세요.</option>
                  <option value="단기모집">단기모집</option>
                  <option value="장기모집">장기모집</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="">지역 선택</label>
              <S.InputBox>
                <select name="" id="">
                  <option value="">지역 선택을 선택해주세요.</option>
                  <option value="단기모집">서울</option>
                  <option value="장기모집">인천</option>
                  <option value="장기모집">경기</option>
                  <option value="장기모집">대구</option>
                  <option value="장기모집">부산</option>
                  <option value="장기모집">경남</option>
                  <option value="장기모집">경북</option>
                  <option value="장기모집">경원</option>
                  <option value="장기모집">전남</option>
                  <option value="장기모집">전북</option>
                  <option value="장기모집">그외</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="">구기종목</label>
              <S.InputBox>
                <select name="" id="">
                  <option value="">구기종목을 선택해주세요.</option>
                  <option value="단기모집">배드민턴</option>
                  <option value="장기모집">농구</option>
                  <option value="장기모집">풋살</option>
                  <option value="장기모집">테니스</option>
                  <option value="장기모집">탁구</option>
                  <option value="장기모집">야구</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="">시간대</label>
              <S.InputBox>
                <select name="" id="">
                  <option value="">시간대을 선택해주세요.</option>
                  <option value="단기모집">01~02시</option>
                  <option value="장기모집">02~03시</option>
                  <option value="장기모집">03~04시</option>
                  <option value="장기모집">04~05시</option>
                  <option value="장기모집">05~06시</option>
                  <option value="장기모집">07~08시</option>
                  <option value="장기모집">09~10시</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="">모집인원</label>
              <S.InputBox>
                <select name="" id="">
                  <option value="">모집인원을 선택해주세요.</option>
                  <option value="단기모집">1명</option>
                  <option value="장기모집">2명</option>
                  <option value="장기모집">3명</option>
                  <option value="장기모집">4명</option>
                  <option value="장기모집">5명 이상</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="start">모집 날짜</label>
              <S.InputBox>
                <S.CalendarBox onClick={startClickHandler}>
                  {moment(start as Date).format("YYYY.MM.DD")}
                </S.CalendarBox>
                {
                  startOpen && <Calendar onChange={startChangeHandler} value={start} />
                }
                <CalenderIcon stroke="#878787"/>
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="end">모집 마감</label>
              <S.InputBox>
                <S.CalendarBox onClick={endClickHandler}>
                  {moment(end as Date).format("YYYY.MM.DD")}
                </S.CalendarBox>
                {
                  endOpen && <Calendar onChange={endChangeHandler} value={end} />
                }
                <CalenderIcon stroke="#878787"/>
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="openkakao">오픈카톡 주소</label>
              <S.InputBox>
                <input type="text" id="openkakao" placeholder="오픈카톡 주소를 입력해주세요."/>
              </S.InputBox>
            </S.InputStyle>

          </S.Gird>

          <S.DescBox>

            <S.Flex>
              <p>2</p>
              <h3>모임에 대해 소개해주세요</h3>
            </S.Flex>

            <S.DescInputStyle>
              <label htmlFor="">제목</label>
              <input type="text" placeholder="제목을 입력해주세요"/>
            </S.DescInputStyle>

            <S.DescInputStyle>
              <label htmlFor="">내용</label>
              <textarea name="" id="" placeholder="내용을 입력해주세요"></textarea>
            </S.DescInputStyle>

          </S.DescBox>
          
          <S.Button type="submit">작성하기</S.Button>
          
        </form>

      </Wrap>
    </S.WrtieStyle>
  )
}

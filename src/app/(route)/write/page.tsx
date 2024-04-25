"use client"
import { Wrap } from "@/app/components/main/style";
import { DescBox, DescInputStyle, Flex, Gird, InputBox, InputStyle, WrtieStyle, Button } from "@/app/components/write/style";

export default function Wrtie() {
  return (
    <WrtieStyle>
      <Wrap>
        
        <form>
          <Flex>
            <p>1</p>
            <h3>모임 정보를 입력해주세요</h3>
          </Flex>

          <Gird>
            <InputStyle>
              <label htmlFor="">모집형식</label>
              <InputBox>
                <select name="" id="">
                  <option value="">모집형식을 선택해주세요.</option>
                  <option value="단기모집">단기모집</option>
                  <option value="장기모집">장기모집</option>
                </select>
                <img src="/asset/icon/down.svg" alt="" />
              </InputBox>
            </InputStyle>
            <InputStyle>
              <label htmlFor="">지역 선택</label>
              <InputBox>
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
                <img src="/asset/icon/down.svg" alt="" />
              </InputBox>
            </InputStyle>
            <InputStyle>
              <label htmlFor="">구기종목</label>
              <InputBox>
                <select name="" id="">
                  <option value="">구기종목을 선택해주세요.</option>
                  <option value="단기모집">배드민턴</option>
                  <option value="장기모집">농구</option>
                  <option value="장기모집">풋살</option>
                  <option value="장기모집">테니스</option>
                  <option value="장기모집">탁구</option>
                  <option value="장기모집">야구</option>
                </select>
                <img src="/asset/icon/down.svg" alt="" />
              </InputBox>
            </InputStyle>
            <InputStyle>
              <label htmlFor="">시간대</label>
              <InputBox>
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
                <img src="/asset/icon/down.svg" alt="" />
              </InputBox>
            </InputStyle>
            <InputStyle>
              <label htmlFor="">모집인원</label>
              <InputBox>
                <select name="" id="">
                  <option value="">모집인원을 선택해주세요.</option>
                  <option value="단기모집">1명</option>
                  <option value="장기모집">2명</option>
                  <option value="장기모집">3명</option>
                  <option value="장기모집">4명</option>
                  <option value="장기모집">5명 이상</option>
                </select>
                <img src="/asset/icon/down.svg" alt="" />
              </InputBox>
            </InputStyle>
            <InputStyle>
              <label htmlFor="">모집 날짜</label>
              <InputBox>
                <input type="text" />
              </InputBox>
            </InputStyle>
            <InputStyle>
              <label htmlFor="">모집 마감</label>
              <InputBox>
                <input type="text" />
              </InputBox>
            </InputStyle>
            <InputStyle>
              <label htmlFor="">오픈카톡 주소</label>
              <InputBox>
                <input type="text" placeholder="오픈카톡 주소를 입력해주세요."/>
              </InputBox>
            </InputStyle>
          </Gird>

          <DescBox>

            <Flex>
              <p>2</p>
              <h3>모임에 대해 소개해주세요</h3>
            </Flex>

            <DescInputStyle>
              <label htmlFor="">제목</label>
              <input type="text" placeholder="제목을 입력해주세요"/>
            </DescInputStyle>

            <DescInputStyle>
              <label htmlFor="">내용</label>
              <textarea name="" id="" placeholder="내용을 입력해주세요"></textarea>
            </DescInputStyle>

          </DescBox>

          <Button type="submit">작성하기</Button>
        </form>

      </Wrap>
    </WrtieStyle>
  )
}

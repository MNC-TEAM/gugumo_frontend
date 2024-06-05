import * as S from "./home.style";

export default function HomeWave() {
  return (
    <S.HomeWave>
        {
            Array(14).fill(0).map((_,index)=>(
                <div key={index}><img src="/asset/image/home/simbol.png" alt="구구모 심볼" /></div>
            ))
        }
    </S.HomeWave>
  )
}

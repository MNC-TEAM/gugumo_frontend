import { MouseEventHandler } from "react";
import * as S from "./BallTag.style";

interface BallTagType {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    active : boolean;
    gametype? : string;
}

export default function BallTag({onClick,active,gametype} : BallTagType) {

    let imageUrl, text, activeUrl;

    switch(gametype){
        case "BADMINTON" :
            imageUrl = '/asset/balltype/ball01.png';
            activeUrl = '/asset/balltype/ball01_active.png';
            text = "배드민턴";
            break;
        case "BASKETBALL" :
            imageUrl = '/asset/balltype/ball02.png';
            activeUrl = '/asset/balltype/ball02.png';
            text = "농구";
            break;
        case "FUTSAL" :
            imageUrl = '/asset/balltype/ball03.png';
            activeUrl = '/asset/balltype/ball03.png';
            text = "풋살";
            break;
        case "TENNIS" :
            imageUrl = '/asset/balltype/ball04.png';
            activeUrl = '/asset/balltype/ball04.png';
            text = "테니스";
            break;
        case "TABLETENNIS" :
            imageUrl = '/asset/balltype/ball05.png';
            activeUrl = '/asset/balltype/ball05.png';
            text = "탁구";
            break;
        case "BASEBALL" :
            imageUrl = '/asset/balltype/ball06.png';
            activeUrl = '/asset/balltype/ball06.png';
            text = "야구";
            break;
    }

    return (
        <S.Button 
            $active={active}
            onClick={onClick}
        >
            <div>
                {!gametype && "전체"}
                {
                    gametype && 
                    <>
                        <S.Imgbox>
                            <img 
                                src={active ? activeUrl : imageUrl} 
                                alt={text} 
                            />
                        </S.Imgbox>
                        {text}
                    </>
                }
            </div>
        </S.Button>
    )
}
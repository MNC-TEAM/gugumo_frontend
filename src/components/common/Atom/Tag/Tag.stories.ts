import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

export interface TagType {
  /**
   * recruit 상태 
   * ball 구기종목 
   * region 지역
   */
  color : "recruit" | "ball" | "region";
  /**
   * 모집중 RECRUIT
   * 모집완료 END
   */
  status? : string;
  /**
   * 배드민턴 BADMINTON
   * 풋살 FUTSAL
   * 농구 BASKETBALL
   * 테니스 TENNIS
   * 탁구 TABLETENNIS
   * 야구 BASEBALL
   */
  gameType? : string;
  /**
   * 서울 SEOUL
   * 경기 GYEONGGI
   * 인천 INCHEON
   * 대구 DAEGU
   * 부산 BUSAN
   * 경남 GYEONGNAM
   * 경북 GYEONGBUK
   * 강원 GANGWON
   * 전남 JEONNAM
   * 전북 JEONBUK
   * 그외 OTHER
   */
  location? : string;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Tag> = {
  title: 'Atom/Tag',
  component: Tag,
  tags : ['autodocs'],
  parameters : {
    layout : "centered",
  },
  argTypes : {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Recruit: Story = {
  args : {
    color : "recruit",
    status : "RECRUIT"
  }
}

export const End: Story = {
  args : {
    color : "recruit",
    status : "END"
  }
}

export const Gametype: Story = {
  args : {
    color : "ball",
    gameType : "BADMINTON"
  }
}

export const Region: Story = {
  args : {
    color : "region",
    location : "SEOUL"
  }
}
export interface MypageDataType {
    status: string;
    data: MypageType;
    message?: any;
  }
  
  export interface MypageType {
    password: string;
    nickname: string;
    profileImagePath: string;
  }
export interface MeetingDataType {
  status: string;
  data: Data;
  message?: any;
}

export interface Data {
  content: Content[];
  pageable: Pageable;
}

export interface Pageable {
  number: number;
  size: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  hasNext: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  empty: boolean;
}

export interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

export interface Content {
  postId: number;
  meetingStatus: string;
  gameType: string;
  location: string;
  title: string;
  meetingMemberNum: number;
  meetingDeadline: string;
  meetingTime?: string;
  meetingDays?: string;
  bookmarked: boolean;
  meetingDateTime?: string;
}




// 상세내용

export interface DetailDataType {
  status: string;
  data: DetailData;
  message?: any;
}

export interface DetailData {
  postId: number;
  author: string;
  meetingType: string;
  gameType: string;
  meetingMemberNum: number;
  meetingDeadline: string;
  openKakao: string;
  location: string;
  title: string;
  content: string;
  createdDateTime: string;
  meetingStatus: string;
  viewCount: number;
  bookmarkCount: number;
  meetingDateTime: string;
  meetingTime: string;
  meetingDays: string;
  bookmarked: boolean;
  authorExpired: boolean;
  yours: boolean;
}







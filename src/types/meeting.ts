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
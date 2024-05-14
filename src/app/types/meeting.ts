export interface meetingType {
    postId: number;
    meetingStatus: string;
    gameType: string;
    location: string;
    title: string;
    meetingMemberNum: number;
    meetingDeadline: string;
    meetingDateTime: string;
    bookmarked: boolean;
}


export interface pageableType {
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
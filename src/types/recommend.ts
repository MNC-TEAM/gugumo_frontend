export interface RecommendType {
    status: string;
    data: Datum[];
    message?: any;
}
  
export interface Datum {
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
export interface APIsearchResults {
  _id: string;
  title: string;
  original_title: string;
  nickname: string;
  fee: number;
  url: string;
  foreign_fee: boolean;
  rewards_type: number;
  rewards: [{ title: string }];
}

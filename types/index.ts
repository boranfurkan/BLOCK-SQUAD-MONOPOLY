import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Reward {
  rewardTokenMint: string;
  amount: number;
}

export interface Reward {
  rewardTokenMint: string;
  amount: number;
}

export interface UserAccount {
  owner: string;
  vault: string;
  stakedAmount: number;
  unlockTimestamp: number;
  timestamp: number;
  votingPowerUsed: number;
  username: string;
  bio: string;
  avatar: string;
  linkedIn: string;
  twitter: string;
  website: string;
  instagram: string;
  spotify: string;
  rewards: Reward[];
}

export interface Submission {
  id: string;
  creator: string;
  name: string;
  thumbnailUri: string;
  description: string;
  genre: Genre;
  category: Category;
  mediaUri: string;
  mediaType: string;
  timestamp: number;
  pubkey: string;
  positiveVotes?: number;
  negativeVotes?: number;
}

export interface VoteAccount {
  submissionId: string;
  positiveVote: boolean;
  voterAccount: string;
}

export interface FeaturedArtist {
  id: string;
  artistAccount: string;
  spotify: string;
  twitter: string;
  instagram: string;
  avatarUri: string;
}

export enum Genre {
  "HipHop" = 0,
  "Pop" = 1,
  "Rock" = 2,
  "Electronic" = 3,
  "Rap" = 4,
  "R&B" = 5,
  "Jazz" = 6,
  "Classical" = 7,
  "Blues" = 8,
  "Country" = 9,
  "Folk" = 10,
  "Reggae" = 11,
  "Metal" = 12,
  "Punk" = 13,
  "Alternative" = 14,
  "Indie" = 15,
}

export enum Category {
  "Musician" = 0,
  "Producer" = 1,
  "Songwriter" = 2,
  "Engineer" = 3,
  "Artist" = 4,
  "Vocalist" = 5,
  "Instrumentalist" = 6,
  "Beatmaker" = 7,
  "Composer" = 8,
  "Arranger" = 9,
  "Music Director" = 10,
  "Music Therapist" = 11,
  "Music Educator" = 12,
  "Music Journalist" = 13,
  "Music Critic" = 14,
  "Music Historian" = 15,
  "Musicologist" = 16,
  "Music Publisher" = 17,
}

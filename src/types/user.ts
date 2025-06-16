
export enum PlanType {
  FREE_TRIAL = 'FREE_TRIAL',
  STARTER = 'STARTER',
  PRO = 'PRO',
  AGENCY = 'AGENCY',
  ENTERPRISE = 'ENTERPRISE'
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  timezone: string;
  language: string;
  emailVerified: boolean;
  isActive: boolean;
  lastLoginAt?: Date;
  planType: PlanType;
  subscriptionId?: string;
  subscriptionEndsAt?: Date;
  trialEndsAt?: Date;
  swipesThisMonth: number;
  aiGenerationsThisMonth: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserAnalytics {
  id: string;
  userId: string;
  date: Date;
  swipesSaved: number;
  aiGenerations: number;
  boardsCreated: number;
  commentsPosted: number;
  metaSwipes: number;
  tiktokSwipes: number;
  googleSwipes: number;
  wistiaSwipes: number;
}

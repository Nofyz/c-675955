
export enum Platform {
  META_FACEBOOK = 'META_FACEBOOK',
  META_INSTAGRAM = 'META_INSTAGRAM',
  TIKTOK_CREATIVE_CENTER = 'TIKTOK_CREATIVE_CENTER',
  TIKTOK_ORGANIC = 'TIKTOK_ORGANIC',
  GOOGLE_ADS = 'GOOGLE_ADS',
  YOUTUBE_ADS = 'YOUTUBE_ADS',
  WISTIA_VSL = 'WISTIA_VSL',
  PINTEREST = 'PINTEREST',
  LINKEDIN = 'LINKEDIN',
  TWITTER_X = 'TWITTER_X'
}

export enum AdType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL = 'CAROUSEL',
  COLLECTION = 'COLLECTION',
  VSL = 'VSL',
  UGC_VIDEO = 'UGC_VIDEO',
  STORY = 'STORY',
  REEL = 'REEL',
  SHORT_VIDEO = 'SHORT_VIDEO'
}

export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  DOCUMENT = 'DOCUMENT',
  THUMBNAIL = 'THUMBNAIL'
}

export interface Swipe {
  id: string;
  userId: string;
  title?: string;
  description?: string;
  platform: Platform;
  platformAdId?: string;
  platformUrl?: string;
  adType: AdType;
  contentUrl?: string;
  thumbnailUrl?: string;
  copyText?: string;
  callToAction?: string;
  landingPageUrl?: string;
  landingPageScreenshot?: string;
  transcription?: string;
  duration?: number;
  hasAudio: boolean;
  folderId?: string;
  tags: string[];
  isPublic: boolean;
  isInDiscovery: boolean;
  discoveryApproved: boolean;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFile {
  id: string;
  swipeId: string;
  fileName: string;
  originalName?: string;
  fileSize: number;
  mimeType: string;
  url: string;
  originalUrl?: string;
  type: MediaType;
  width?: number;
  height?: number;
  duration?: number;
  frameRate?: number;
  bitrate?: number;
  createdAt: Date;
}

export interface SwipeAnalytics {
  id: string;
  swipeId: string;
  views?: bigint;
  likes?: number;
  shares?: number;
  comments?: number;
  youtubeViews?: bigint;
  vslPlays?: number;
  vslCompletionRate?: number;
  engagementRate?: number;
  isHighPerforming: boolean;
  performanceScore?: number;
  hiddenMetrics?: any;
  createdAt: Date;
  updatedAt: Date;
}


export enum AiCopyType {
  AD_SCRIPT = 'AD_SCRIPT',
  EMAIL_COPY = 'EMAIL_COPY',
  ADVERTORIAL = 'ADVERTORIAL',
  VSL_SCRIPT = 'VSL_SCRIPT',
  LANDING_PAGE = 'LANDING_PAGE',
  SOCIAL_POST = 'SOCIAL_POST',
  SMS_COPY = 'SMS_COPY'
}

export interface AiGeneration {
  id: string;
  userId: string;
  swipeId?: string;
  title: string;
  informationDump: string;
  targetAudience?: string;
  productName?: string;
  brandVoice?: string;
  additionalContext?: string;
  copyType: AiCopyType;
  platform?: string;
  tone?: string;
  generatedCopy: string;
  alternativeVersions: string[];
  modelUsed: string;
  promptVersion: string;
  processingTime?: number;
  rating?: number;
  feedback?: string;
  isBookmarked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UrlTranscribe {
  id: string;
  userId: string;
  url: string;
  extractedData: any;
  rawContent?: string;
  processingTime?: number;
  status: string;
  createdAt: Date;
}


import React from 'react';

export interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface UseCaseProps {
  useCase: UseCase;
  isActive: boolean;
  onClick: () => void;
}

// Legacy types for UserCases components
export interface UserCase {
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  background: string;
  textColor: string;
  ctaText: string;
  showImageGrid?: boolean;
  showNotepad?: boolean;
  showBrain?: boolean;
  showDevTools?: boolean;
  showTags?: boolean;
}

export interface UserCasesData {
  [key: string]: UserCase;
}

export interface Book {
  title: string;
  author: string;
  coverColor: string;
  textColor: string;
}

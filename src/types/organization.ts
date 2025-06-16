
export interface Folder {
  id: string;
  userId: string;
  parentId?: string;
  name: string;
  description?: string;
  color?: string;
  emoji?: string;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum BoardRole {
  OWNER = 'OWNER',
  EDITOR = 'EDITOR',
  COMMENTER = 'COMMENTER',
  VIEWER = 'VIEWER'
}

export interface Board {
  id: string;
  userId: string;
  organizationId?: string;
  name: string;
  description?: string;
  emoji?: string;
  isPublic: boolean;
  shareSlug?: string;
  allowComments: boolean;
  theme?: string;
  coverImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BoardMember {
  id: string;
  boardId: string;
  userId: string;
  role: BoardRole;
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  swipeId?: string;
  boardId?: string;
  parentId?: string;
  content: string;
  isResolved: boolean;
  createdAt: Date;
  updatedAt: Date;
}


// Core types that don't fit in specific category files
export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'paused';
}

export interface UserProfile {
  name: string;
  email: string;
  description?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
  projects?: Project[];
}

export interface NeuralNodeData {
  id: string;
  title: string;
  type: 'note' | 'link' | 'file' | 'image' | 'project';
  content?: string;
  connections: string[];
  x?: number;
  y?: number;
  size?: number;
  color?: string;
}

export interface ImportSource {
  id: string;
  name: string;
  type: string;
  icon: string;
  description: string;
}

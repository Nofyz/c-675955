
// Mock data for manage page
export interface CortexItem {
  id: string;
  title: string;
  url: string;
  type: string;
  createdDate: string;
  keywords: string[];
  source: string;
  pitch: string;
  writer: string;
}

export const cortexData: CortexItem[] = [
  {
    id: '1',
    title: 'Sample Project',
    url: 'https://example.com',
    type: 'Video Ad',
    createdDate: '2024-01-15',
    keywords: ['marketing', 'conversion'],
    source: 'Facebook',
    pitch: 'High-converting video ad for e-commerce',
    writer: 'John Doe'
  },
  {
    id: '2',
    title: 'Landing Page Copy',
    url: 'https://example2.com',
    type: 'Landing Page',
    createdDate: '2024-01-10',
    keywords: ['landing', 'copy'],
    source: 'Google',
    pitch: 'Convert visitors with compelling copy',
    writer: 'Jane Smith'
  }
];

export const mockProjects = cortexData;

export const columns = [
  { id: 'title', name: 'Title', sortable: true },
  { id: 'url', name: 'URL', sortable: false },
  { id: 'type', name: 'Type', sortable: true },
  { id: 'createdDate', name: 'Created', sortable: true },
  { id: 'keywords', name: 'Keywords', sortable: false },
  { id: 'source', name: 'Source', sortable: true },
  { id: 'pitch', name: 'Pitch', sortable: false },
  { id: 'writer', name: 'Writer', sortable: true }
];

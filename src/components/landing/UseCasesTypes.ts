
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

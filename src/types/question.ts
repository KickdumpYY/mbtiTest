export interface Question {
  id: number;
  text: string;
  category: 'E/I' | 'S/N' | 'T/F' | 'J/P';
  options: {
    a: string;
    b: string;
  };
} 
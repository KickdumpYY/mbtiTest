import { Question } from './question';

export type DimensionResult = {
  dimension: string;
  primary: string;
  secondary: string;
  percentage: number;
  total: number;
};

export type MBTIResult = {
  type: string;
  dimensions: {
    EI: DimensionResult;
    SN: DimensionResult;
    TF: DimensionResult;
    JP: DimensionResult;
  };
};

export type TestProgress = {
  answers: Record<number, 'a' | 'b'>;
  currentQuestion: number;
  version: string;
  questions: Question[];
};

export type TestRecord = {
  username: string;
  progress?: TestProgress;
  result?: MBTIResult;
  completed: boolean;
  startedAt: Date;
  lastUpdated: Date;
  completedAt?: Date;
}; 
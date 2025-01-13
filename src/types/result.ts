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
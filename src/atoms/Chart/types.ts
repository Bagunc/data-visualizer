export type LineChartValue<Result> = {
  [key in keyof Result]: {
    label: string;
    colors?: {
      fill?: string;
      stroke?: string;
    };
  };
};

export interface LineChartProps<Result> {
  heading?: string;
  modelValue: LineChartValue<Result>;
}

import { CSSProperties } from "vue";

export interface TableHeader<NameType = string> {
  label: string;
  name: keyof NameType;
  style: CSSProperties;
}

export interface TableProps<ValueType> {
  headers: Array<TableHeader>;
  data: Array<ValueType>;
}

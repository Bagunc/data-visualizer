export interface DropdownOption<ValueType = string> {
  label: string;
  value: ValueType;
}

export interface DropdownProps<ValueType = string> {
  placeholder?: string;
  modelValue?: ValueType;
  options: Array<DropdownOption>;
}

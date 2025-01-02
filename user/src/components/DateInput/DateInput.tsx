import { ChangeEventHandler } from "react";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function DateInput({ value, onChange }: DateInputProps) {
  return (
    <input
      type="date"
      className="input-text"
      value={value}
      onChange={onChange}
    />
  );
}

export default DateInput;

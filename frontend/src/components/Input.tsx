import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

interface IInputComponent {
  htmlFor: string;
  label: string;
  id: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  value: string | number | undefined;
}

export function InputComponent({
  htmlFor,
  label,
  id,
  placeholder,
  handleChange,
  type = "text", value
}: IInputComponent) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input value={value} type={type} onChange={handleChange} id={id} className="h-12" placeholder={placeholder} />
    </div>
  );
}

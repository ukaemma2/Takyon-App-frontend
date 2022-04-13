import { ButtonProps } from "@types";

export default function Button({ type, value }: ButtonProps) {
  return (
    <>
      <button className={`takyon-button btn-${type}`}>{value}</button>
    </>
  );
}

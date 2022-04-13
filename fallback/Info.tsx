import React from "react";

type InfoProps = {
  type: "error" | "info" | "success" | "warning";
  name: string;
  message: string;
};
export default function Info({ type, name, message }: InfoProps) {
  return <div></div>;
}

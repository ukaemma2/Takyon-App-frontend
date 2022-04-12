import React from "react";
import { Alert, AlertTitle } from "@mui/material";

type InfoProps = {
  type: "error" | "info" | "success" | "warning";
  name: string;
  message: string;
};
export default function Info({ type, name, message }: InfoProps) {
  return (
    <Alert severity={type}>
      <AlertTitle>{name}</AlertTitle>
      {message}
    </Alert>
  );
}

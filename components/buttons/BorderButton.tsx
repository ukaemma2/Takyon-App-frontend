import React from "react";
import { Button } from "@mui/material";

type BorderButtonProps = {
  text: string;
};

export default function BorderButton({ text }: BorderButtonProps) {
  return <Button variant="outlined">{text}</Button>;
}

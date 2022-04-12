import React from "react";
import { Button } from "@mui/material";

type BlueButtonProps = {
  text: string;
  cmd: () => void;
  Icon?: React.ReactNode;
};

export default function BlueButton({ text, cmd, Icon }: BlueButtonProps) {
  return (
    <Button onClick={() => cmd()} variant="contained" disableElevation>
      {text}
    </Button>
  );
}

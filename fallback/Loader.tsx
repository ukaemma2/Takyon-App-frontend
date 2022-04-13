import React from "react";
import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="tw-container">
      <Audio height="100" width="100" color="red" ariaLabel="loading" />
    </div>
  );
}

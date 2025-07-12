import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <DynamicIcon
        name="bolt"
        className="motion-safe:animate-spin text-primary self-center w-12 h-12"
      />
    </div>
  );
}

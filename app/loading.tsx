import LoadingSpinner from "@/components/ui/LoadingSpinner";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center p-9 justify-center">
      <LoadingSpinner />
    </div>
  );
}

export default Loading;

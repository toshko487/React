import React from "react";

export function Chip({ label }) {
  return (
    <div className="inline-block rounded-full px-4 py-2 bg-gray-200">
      {label}
    </div>
  );
}

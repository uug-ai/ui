// icon:switch-camera | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function CameraSwap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M11 19H4a2 2 0 01-2-2V7a2 2 0 012-2h5M13 5h7a2 2 0 012 2v10a2 2 0 01-2 2h-5" />
      <path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
      <path d="M18 22l-3-3 3-3M6 2l3 3-3 3" />
    </svg>
  );
}

export default CameraSwap;

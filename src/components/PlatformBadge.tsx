
import React from "react";
import { platformColors, PlatformKey } from "@/utils/platformColors";

const PlatformBadge = ({
  platform
}: {
  platform: PlatformKey;
}) => {
  const { name, bg, text } = platformColors[platform];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded font-semibold text-xs uppercase ${bg} ${text} mr-2`}>
      {name}
    </span>
  );
};

export default PlatformBadge;

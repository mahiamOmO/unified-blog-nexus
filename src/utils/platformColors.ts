
export const platformColors = {
  devto: {
    name: "Dev.to",
    color: "#0A0A0A",
    bg: "bg-[#0A0A0A]",
    text: "text-white",
    border: "border-[#0A0A0A]",
    icon: "/devto.svg"
  },
  medium: {
    name: "Medium",
    color: "#00ab6c",
    bg: "bg-[#00ab6c]",
    text: "text-white",
    border: "border-[#00ab6c]",
    icon: "/medium.svg"
  },
  hashnode: {
    name: "Hashnode",
    color: "#2962ff",
    bg: "bg-[#2962ff]",
    text: "text-white",
    border: "border-[#2962ff]",
    icon: "/hashnode.svg"
  }
};

export type PlatformKey = keyof typeof platformColors;

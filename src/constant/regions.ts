export type Region = "US48" | "CISO";

export const REGIONS: { value: Region; label: string }[] = [
  { value: "US48", label: "US Lower 48" },
  { value: "CISO", label: "California ISO" },
];

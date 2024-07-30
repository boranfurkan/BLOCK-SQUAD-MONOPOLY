import { ICON_DEFAULT_WIDTH_HEIGHT, IconProps } from "./index";

export function PauseIcon({
  fill = "#fff",
  width = ICON_DEFAULT_WIDTH_HEIGHT,
  height = ICON_DEFAULT_WIDTH_HEIGHT,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M6 2h4v20H6V2zm8 0h4v20h-4V2z" />
    </svg>
  );
}

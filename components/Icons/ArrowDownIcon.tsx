import { ICON_DEFAULT_WIDTH_HEIGHT, IconProps } from "./index";

export function ArrowDownIcon({
  fill = "#fff",
  width = ICON_DEFAULT_WIDTH_HEIGHT,
  height = ICON_DEFAULT_WIDTH_HEIGHT,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="19"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M20.2268 25.3335L20.2268 26.5406L21.0804 25.6871L24.4908 22.2767L24.1372 21.9231L24.4908 22.2767C24.5793 22.1881 24.7229 22.1881 24.8114 22.2767C24.8999 22.3652 24.8999 22.5088 24.8114 22.5973L20.1605 27.2483C20.0719 27.3368 19.9284 27.3368 19.8398 27.2483L19.4863 27.6018L19.8398 27.2483L15.189 22.5976C15.1445 22.553 15.1224 22.4957 15.1224 22.4371C15.1224 22.3784 15.1445 22.3212 15.1888 22.2768C15.2774 22.1882 15.4209 22.1882 15.5095 22.2768L15.5095 22.2768L18.9199 25.6871L19.7734 26.5406L19.7734 25.3335L19.7734 12.9123C19.7734 12.7871 19.875 12.6855 20.0001 12.6855C20.1253 12.6855 20.2268 12.7871 20.2268 12.9123L20.2268 25.3335Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
}

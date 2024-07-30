import { ICON_DEFAULT_WIDTH_HEIGHT, IconProps } from "./index";

export function HearthIcon({
  fill = "#fff",
  width = ICON_DEFAULT_WIDTH_HEIGHT,
  height = ICON_DEFAULT_WIDTH_HEIGHT,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_73_6145)">
        <path
          d="M10.2694 4.34177C8.04444 -0.142072 0.822266 1.14206 0.822266 6.91634C0.822266 12.6402 8.61919 15.5281 10.2694 18.9711C11.9197 15.5281 19.7174 12.6402 19.7174 6.91634C19.7174 1.14757 12.4976 -0.147583 10.2694 4.34177Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_73_6145"
          x="-7.88628"
          y="-3.77582"
          width="36.3121"
          height="34.7418"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.28625" />
          <feGaussianBlur stdDeviation="4.35428" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.67 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_73_6145"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_73_6145"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

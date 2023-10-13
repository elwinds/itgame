interface IconProps {
  className?: string;
}

const EditIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_1_1057)">
        <circle cx="27" cy="27" r="27" fill="url(#paint0_linear_1_1057)" />
      </g>
      <path
        d="M20 18C18.89 18 18 18.89 18 20V34C18 34.5304 18.2107 35.0391 18.5858 35.4142C18.9609 35.7893 19.4696 36 20 36H34C34.5304 36 35.0391 35.7893 35.4142 35.4142C35.7893 35.0391 36 34.5304 36 34V27H34V34H20V20H27V18H20ZM32.78 19C32.6 19.0015 32.4278 19.0733 32.3 19.2L31.08 20.41L33.58 22.91L34.8 21.7C35.06 21.44 35.06 21 34.8 20.75L33.25 19.2C33.12 19.07 32.95 19 32.78 19ZM30.37 21.12L23 28.5V31H25.5L32.87 23.62L30.37 21.12Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1_1057"
          x="0"
          y="0"
          width="55"
          height="55"
          filterUnits="userSpaceOnUse"
          colorinterpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.34902 0 0 0 0 0.129412 0 0 0 0 0.796078 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1057"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1057"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_1057"
          x1="54"
          y1="0"
          x2="0"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A903D2" />
          <stop offset="1" stopColor="#410095" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default EditIcon;

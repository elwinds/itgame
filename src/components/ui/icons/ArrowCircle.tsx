interface IconProps {
  className?: string;
  viewBox?: string;
}

export const ArrowCircleIcon = ({
  className = "",
  viewBox = "0 0 72 72",
}: IconProps) => {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="36"
        cy="36"
        r="35.5"
        stroke="url(#paint0_linear_0_1)"
        strokeWidth="2"
      />
      <path
        d="M38.5 43.5L31 36L38.5 28.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="1"
          y1="36"
          x2="71"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EE0979" />
          <stop offset="1" stopColor="#FF6A00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

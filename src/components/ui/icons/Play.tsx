interface IconProps {
  className?: string;
}

const PlayIcon:React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 35 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 3.48306V39.5169C0 42.2647 3.00148 43.9342 5.31296 42.4386L33.3958 24.4217C35.5347 23.0652 35.5347 19.9348 33.3958 18.5436L5.31296 0.561393C3.00148 -0.934222 0 0.735302 0 3.48306Z"
        fill="white"
      />
    </svg>
  );
};

export default PlayIcon;

interface IconProps {
  className?: string;
}

const UpIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <img
      src={"/assets/icons/up.png"}
      alt="check icon"
      className={className}
    />
  );
};

export default UpIcon;

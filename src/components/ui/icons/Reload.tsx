interface IconProps {
  className?: string;
}

const ReloadIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <img
      src={"/assets/icons/reload.png"}
      alt="attack icon"
      className={className}
    />
  );
};

export default ReloadIcon;

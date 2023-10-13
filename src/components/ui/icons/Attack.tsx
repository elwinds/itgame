interface IconProps {
  className?: string;
}

const AttackIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <img
      src={"/assets/icons/attack.png"}
      alt="attack icon"
      className={className}
    />
  );
};

export default AttackIcon;

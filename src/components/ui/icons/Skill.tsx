interface IconProps {
  className?: string;
  url: string;
}

const StarIcon: React.FC<IconProps> = ({ className, url }) => {
  return (
    <img
      src={url}
      alt="check icon"
      className={className}
    />
  );
};

export default StarIcon;

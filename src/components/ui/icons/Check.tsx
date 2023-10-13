interface IconProps {
  className?: string;
}

const CheckIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <img src={'/assets/icons/check.png'} alt='check icon' className={className}/>
  );
};

export default CheckIcon;

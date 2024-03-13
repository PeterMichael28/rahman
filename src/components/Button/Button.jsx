import { classNames } from "~/utilities/classNames";
import overlay from "~/assets/images/btn-overlay.png";

const Button = ({
  children,
  label,
  type = "button",
  disabled, // primary, tertiary, secondary, error
  className,
  icon,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        " rounded-lg  bg-primary shadow-inner shadow-[rgba(95,43,220,.7)] relative overflow-hidden",
        "disabled:cursor-not-allowed",
        disabled && "bg-opacity-50",
        "focus:outline-none hover:bg-primary-hover transition-all duration-350",
        className
      )}
      onClick={onClick}
    >
      {/* bg image */}
      {/* <img src={overlay} alt="bg-image" className="absolute left-1/2 bottom-0 -translate-x-1/2 object-contain" /> */}

      <div className="relative z-20 inline-flex justify-center items-center gap-2.5 px-[18px] lg:px-7 h-12 lg:h-14 lg:text-[18px] text-sm text-white font-medium">
        {children || label}
        {icon}
      </div>
    </button>
  );
};

export default Button;

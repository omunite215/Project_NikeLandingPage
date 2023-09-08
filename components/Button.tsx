import Image from "next/image";
interface buttonTypes {
  label: string;
  iconURL: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  fullWidth: boolean;
}
const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: buttonTypes) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt="arrow right icon"
          width={20}
          height={20}
          className=" ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;

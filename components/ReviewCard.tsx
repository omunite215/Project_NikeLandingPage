import { star } from "@/public/icons";
import Image from "next/image";

interface reviewCardProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: reviewCardProps) => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="Customer"
        width={120}
        height={120}
        className="rounded-full object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className=" mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className=" text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className=" mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;

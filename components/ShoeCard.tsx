import Image from "next/image";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }: any) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className=" flex justify-center items-center bg-card bg-[#C1C4DE] sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103.34}
        />
      </div>
    </div>
  );
};

export default ShoeCard;

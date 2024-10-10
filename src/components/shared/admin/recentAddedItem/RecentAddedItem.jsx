import { ThreeActionButtons } from "@/components";
import Image from "next/image";

const RecentAddedItem = ({ data, type }) => {
  const description =
    data?.description && data.description.length > 150
      ? `${data?.description.substr(0, 150)} ...`
      : data?.description;
  return (
    <div className="flex items-start gap-2 w-full hover:cursor-pointer hover:bg-gray-100 px-4 py-2">
  
      {type == "category" && (
        <Image
          src={`/assets/icons/optimized/${data.img}`}
          alt="recipe"
          height={32}
          width={32}
        />
      )}
      {type == "recipes" && (
        <Image
          src={`/assets/imgs/optimized/${data.coverImage}`}
          alt="recipe"
          height={28}
          width={60}
        />
      )}
      {/* data */}
      <div className="flex gap-2 flex-col items-start w-full">
        {/* title and action button */}
        <div className="flex  items-center   justify-between w-full">
          <div className="font-medium text-dark-gray  ">{data.title}</div>
          <ThreeActionButtons facebook={false} edit={true} del={true} />
        </div>
        <div className="w-full text-sm leading-relaxed text-gray-text">
          {description}
        </div>
      </div>

      {/* description */}
    </div>
  );
};

export default RecentAddedItem;

import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
const ProfileNotificationSearch = () => {
  return (
    <div className="flex items-center justify-end  gap-4 w-full lg:basis-2/3 xl:basis-1/3 px-2 ">
      {/* search */}
      <div className="hidden lg:block border w-2/3  border-gray-300 rounded-lg mr-auto ">
        <input
          type="search"
          name="search"
          placeholder="Search here..."
          className="outline-none border-none bg-none px-4 py-1 w-full rounded-lg text-lg text-gray-title "
        />

      </div>
      {/* search icon with mobile screens */}
      <div className="w-[40px] h-[40px] border border-gray-title flex items-center justify-center rounded-full lg:hidden">
        <IoSearch className="text-2xl text-gray-text" />
      </div>
      {/* notification */}
      <div className="w-[40px] h-[40px] border border-gray-title flex items-center justify-center rounded-full">
        <IoMdNotifications className="text-2xl text-gray-text" />
      </div>
      {/* avatar */}
      <Image
        src={"/assets/imgs/avatar.png"}
        alt="avatar"
        width={40}
        height={40}
      />
    </div>
  );
};

export default ProfileNotificationSearch;

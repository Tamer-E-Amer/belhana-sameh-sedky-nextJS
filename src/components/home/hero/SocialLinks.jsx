import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaYoutube />,
  },
  {
    id: 4,
    icon: <FaPhone />,
  },
  {
    id: 5,
    icon: <FaTelegramPlane />,
  },
];

const SocialLinks = () => {
  const renderLinks = socials.map((item) => (
    <div
      key={item.id}
      className="cursor-pointer hover:text-primary-orange transition duration-300"
    >
      {item.icon}
    </div>
  ));
  return (
    <>
      <div className="hidden lg:flex w-[44px] h-[270px] border-2 rounded-full border-white absolute top-24 right-0 z-30  flex-col items-center justify-between py-4 text-xl text-white">
        {renderLinks}
      </div>
    </>
  );
};

export default SocialLinks;

import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="hidden xl:flex items-center justify-between px-2 gap-4">
      <Link className="hover:underline" href={"/login"}>
        login
      </Link>
      <div className="w-[120px] border py-2 flex items-center justify-center cursor-pointer hover:bg-primary-orange hover:text-white transitio duration-300">
        Register
      </div>
    </div>
  );
};

export default AuthButtons;

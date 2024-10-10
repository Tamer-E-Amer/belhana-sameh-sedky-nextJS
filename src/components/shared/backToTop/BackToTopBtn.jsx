"use client";
import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";
const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll the page back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="hidden w-[100px] h-[100px] rounded-full fixed right-0 -bottom-[40px] bg-primary-orange lg:flex items-center justify-center cursor-pointer hover:bg-dark-blue transition-all duration-300 z-50"
          onClick={scrollToTop}
        >
          <GoMoveToTop className="text-7xl text-white" />
        </div>
      )}
    </>
  );
};

export default BackToTopBtn;

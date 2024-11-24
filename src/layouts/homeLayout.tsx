import React from "react";
import Navbar from "@/components/Navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={`mx-auto overflow-hidden px-4 pt-[112px] sm:px-12 lg:px-16 ${className ? className : ""}`}
      >
        {children}
      </div>
    </>
  );
};

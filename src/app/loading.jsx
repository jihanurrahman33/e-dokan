import Logo from "@/components/Logo/Logo";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-primary min-h-screen text-primary-content animate-bounce flex justify-center items-center">
      <Logo />
    </div>
  );
};

export default Loading;

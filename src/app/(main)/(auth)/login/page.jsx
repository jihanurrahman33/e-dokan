import LoginForm from "@/components/LoginForm/LoginForm";
import GoogleLogin from "@/components/SocialLogin/GoogleLogin";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <h2 className="text-4xl p-4 text-primary">Welcome Back!</h2>
      <p className="text-primary mb-5">Please login to your account</p>
      <LoginForm />
    </div>
  );
};

export default Login;

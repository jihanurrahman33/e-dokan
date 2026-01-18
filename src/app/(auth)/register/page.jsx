import { registerUser } from "@/actions/server/users";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import GoogleLogin from "@/components/SocialLogin/GoogleLogin";
import React from "react";

const Register = () => {
  const getUserDataFromForm = async (formData) => {
    "use server";
    const result = await registerUser({
      name: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    if (!result?.error) {
      return { success: true };
    }
    return result;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-10">Register Now!</h1>
      <p className="text-center text-gray-600">
        Please fill in the form below to create an account.
      </p>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <RegisterForm getUserDataFromForm={getUserDataFromForm} />
        <div className="mt-2">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;

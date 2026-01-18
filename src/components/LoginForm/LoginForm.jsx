"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }

    setLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
    >
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          {error && <p className="text-error text-sm mt-1">{error}</p>}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          {error && <p className="text-error text-sm mt-1">{error}</p>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary mt-4">Login</button>
        </fieldset>
        <GoogleLogin />
      </div>
    </form>
  );
};

export default LoginForm;

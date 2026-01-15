"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    if (email === "admin@gmail.com" && password === "admin123") {
      //TODO:set cookie and redirect to home
      cookieStore.set("auth", "true");
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };
  const [error, setError] = useState("");
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
      </div>
    </form>
  );
};

export default LoginForm;

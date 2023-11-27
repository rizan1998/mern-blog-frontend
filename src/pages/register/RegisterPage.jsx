import React from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../components/MainLayout";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const RegisterPage = () => {
  useMutation({
    mutationFn: ({ name, email, password }) => {
      return MdSettingsBackupRestore({ name, email, password });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  console.log(isValid);

  const submitHandler = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">Sign Up</h1>
          <form onSubmit={handleSubmit(submitHandler)} action="">
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="name" className="text-[#5a7184] font-semibold block">
                Name
              </label>
              <input
                type="text"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"}`}
                placeholder="Enter name"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              {errors.name?.message && <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="email" className="text-[#5a7184] font-semibold block">
                Email
              </label>
              <input
                type="email"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`}
                placeholder="Enter email"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
              />
              {errors.email?.message && <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="password" className="text-[#5a7184] font-semibold block">
                Password
              </label>
              <input
                type="password"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"}`}
                placeholder="Enter password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password length must be least 6 characters",
                  },
                })}
              />
              {errors.password?.message && <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="confirmPassword" className="text-[#5a7184] font-semibold block">
                Confirm password
              </label>
              <input
                type="password"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"}`}
                placeholder="Enter confirm password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Password do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword?.message && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword?.message}</p>}
            </div>
            <Link to="/forget-password" className="text-sm font-semibold text-primary">
              Forgot password?
            </Link>
            <button type="submit" disabled={!isValid} className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed">
              Register
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              You have an account?{" "}
              <Link to="/login" className="text-primary">
                Login now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
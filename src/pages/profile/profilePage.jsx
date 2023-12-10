import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import MainLayout from "../../components/MainLayout";
import { getUserProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.setUserInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: {
      name: profileIsLoading ? "" : profileData.name,
      email: profileIsLoading ? "" : profileData.email,
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {};

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={profileData?.avatar} />
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
            <button type="submit" disabled={!isValid || profileIsLoading} className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed">
              Register
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;

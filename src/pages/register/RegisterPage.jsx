import React from "react";
import MainLayout from "../../components/MainLayout";

const RegisterPage = () => {
  const submitHandler = () => {};

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">Sign Up</h1>
          <form onSubmit={submitHandler} action="">
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="name" className="text-[#5a7184] font-semibold block">
                Name
              </label>
              <input type="text" className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]" placeholder="Enter name" id="name" />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="email" className="text-[#5a7184] font-semibold block">
                Email
              </label>
              <input type="email" className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]" placeholder="Enter email" id="email" />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="password" className="text-[#5a7184] font-semibold block">
                Password
              </label>
              <input type="password" className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]" placeholder="Enter password" id="password" />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="confirmPassword" className="text-[#5a7184] font-semibold block">
                Confirm password
              </label>
              <input type="password" className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]" placeholder="Enter confirm password" id="confirmPassword" />
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;

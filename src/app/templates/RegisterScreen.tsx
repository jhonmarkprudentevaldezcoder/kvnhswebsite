import React from "react";

export default function RegisterScreen() {
  return (
    <div id="Registe" className="mb-12 mt-12">
      <div
        className="h-96 bg-gray-200/50 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ban.jpg')",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-9">
        <div className="flex flex-col py-4 gap-1 md:w-1/2 lg:w-1/4">
          <div className="flex flex-col gap-5 md:py-5 lg:py-12   ">
            <span className="font-bold text-[#051c40] text-3xl uppercase px-5 md:px-0 ">
              REGISTER
            </span>
            <form className="text-sm px-5 md:px-0 flex flex-col gap-4 ">
              <input type="text" placeholder="EMAIL" className="input-text" />
              <input
                type="password"
                placeholder="PASSWORD"
                className="input-text"
                required
              />
              <input
                type="password"
                placeholder="PASSWORD"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="FIRST NAME"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="MIDDLE NAME"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="GENDER"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="ADDRESS"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="GRADE LEVEL"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="SECTION"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="CONTACT NUMBER"
                className="input-text"
              />
              <input
                type="submit"
                value="REGISTER"
                className="p-2 w-full bg-blue-900 text-white font-sans font-bold cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-75 delay-75"
              />
            </form>
          </div>
        </div>

        <div className="md:w-1/4 py-5 md:py-2 flex items-center">
          <div
            className="h-96 bg-gradient-to-r from-blue-900 to-blue-500  w-full "
            style={{
              backgroundImage: "url('/images/logo.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

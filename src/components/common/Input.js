import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({ label, name, type, error, handleChange }) => {
  const [isVisibile, setIsVisible] = useState(false);
  const input = useRef(); //getting reference of input box

  const Icon = () => {
    if (isVisibile)
      return (
        <AiOutlineEyeInvisible
          onClick={handleVisible}
          // className="absolute cursor-pointer top-[47.5%] left-[75%] md:left-[59.5%] text-2xl lg:top-[52%] lg:left-[62%] lg:text-xl"
          className="-translate-y-7 translate-x-2 cursor-pointer text-xl"
        />
      );
    return (
      <AiOutlineEye
        onClick={handleVisible}
        // className="absolute cursor-pointer top-[47.5%] left-[75%] md:left-[59.5%] text-2xl lg:top-[52%] lg:left-[62%] lg:text-xl"
        className="-translate-y-7 translate-x-2 cursor-pointer text-xl"
      />
    );
  };

  const handleVisible = () => {
    if (!isVisibile) {
      input.current.type = "text";
    } else {
      input.current.type = "password";
    }
    setIsVisible(!isVisibile);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-lg">
        {label} <sup>*</sup>
      </label>

      <input
        ref={input}
        onChange={(e) => handleChange(e)}
        type={type || "text"}
        name={name}
        className={
          type === "password"
            ? "border border-slate-300 rounded-sm h-10 pl-8"
            : "border border-slate-300 rounded-sm h-10 pl-4"
        }
      />
      {type === "password" && Icon()}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Input;

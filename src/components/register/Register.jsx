import React, { useRef, useState } from "react";
import Joi from "joi-browser";
import Input from "../common/Input";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    cPassword: "",
    referralCode: "",
  });
  const [errors, setErrors] = useState("");

  const schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    fullName: Joi.string().required().label("Full Name"),
    phone: Joi.string().min(10).max(14).required(),
    referralCode: Joi.any(),
    password: Joi.string().min(8).required(),
    cPassword: Joi.valid(Joi.ref("password"))
      .options({
        language: { any: { allowOnly: "must match Password" } },
      })
      .label("Confirm Password"),
  };
  const form = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      label: "Full Name",
      error: errors["fullName"],
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      label: "Phone",
      error: errors["phone"],
    },
    {
      id: 3,
      name: "email",
      type: "email",
      label: "Email",
      error: errors["email"],
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      error: errors["password"],
    },
    {
      id: 5,
      name: "cPassword",
      type: "password",
      label: "Confirm Password",
      error: errors["cPassword"],
    },
    {
      id: 6,
      name: "referralCode",
      type: "number",
      label: "Referral Code",
      error: errors["referralCode"],
    },
  ];
  const checkBox = useRef(null);
  const navigate = useNavigate();

  // checking form
  const validateForm = (e) => {
    e.preventDefault();
    const result = Joi.validate(user, schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      if (!checkBox.current.checked) {
        window.alert("please accept term and condition to register");
        return null;
      }
      console.log("login sucessfull");
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
      return errorData;
    }
  };

  // checking if the requirement meet or not in every change
  const handleSave = (e) => {
    const { name, value } = e.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(e);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let userData = { ...user };
    userData[name] = value;
    setUser(userData);
    setErrors(errorData);
  };

  // validating each input field
  const validateProperty = (e) => {
    const { name, value } = e.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  return (
    <main className="container  h-[90vh] flex items-center justify-center">
      <div className=" mx-10 px-10 py-10 border border-slate-200 border-spacing-2 rounded-lg shadow-2xl md:w-2/5 ">
        <h1 className="text-2xl text-red-700 mb-3 md:text-3xl lg:text-4xl">
          Register
        </h1>
        <form className="space-y-2" onSubmit={validateForm}>
          {form.map((item) => (
            <Input
              key={item.id}
              name={item.name}
              type={item.type}
              label={item.label}
              error={item.error}
              handleChange={handleSave}
            />
          ))}
          <p>
            <input type="checkbox" name="checkbox" ref={checkBox} /> I accept to
            all the
            <strong className="text-red-500 underline underline-offset-1">
              {" "}
              Terms and Condition{" "}
            </strong>
            of Aanbhi
          </p>
          <button
            type="submit"
            className="bg-red-600 text-white text-center w-full h-10 rounded-sm text-lg transition-colors hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600"
          >
            Register
          </button>
        </form>
        <p className="mt-5">Already have an account?</p>
        <button
          onClick={() => navigate("/login")}
          className="border-2 border-red-600 text-red-600 text-center w-full h-10 rounded-sm transition-colors text-lg hover:bg-red-600 hover:text-white hover:border-2 hover:border-red-600"
        >
          Login
        </button>
      </div>
    </main>
  );
};

export default Register;

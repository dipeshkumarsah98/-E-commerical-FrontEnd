import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import Joi from "joi-browser";
import { loginStore } from "../../store/AuthStore";
import { observer } from "mobx-react-lite";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).required(),
  };

  const navigate = useNavigate();

  // checking form
  const validateForm = (e) => {
    e.preventDefault();
    const result = Joi.validate(user, schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      const data = getData(e);
      doLogin(data);
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

  const doLogin = async (data) => {
    try {
      await loginStore.doLogin(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    const details = {
      email: email,
      password: password,
    };
    console.log(details);
    return details;
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
          Login
        </h1>
        {loginStore.errors && (
          <p className="text-red-700 text-center">{loginStore.errors}</p>
        )}
        <form className="space-y-2" onSubmit={validateForm}>
          <Input
            name="email"
            type="email"
            label="Email"
            error={errors["email"]}
            handleChange={handleSave}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={errors["password"]}
            handleChange={handleSave}
          />
          <p>
            <Link to="/forget-password">Forget Password?</Link>
          </p>
          <button
            type="submit"
            className="bg-red-600 text-white text-center w-full h-10 rounded-sm text-lg transition-colors hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600"
          >
            Login
          </button>
        </form>

        <p className="mt-5">Don't have an account?</p>
        <button
          onClick={() => navigate("/register")}
          className="border-2 border-red-600 text-red-600 text-center w-full h-10 rounded-sm transition-colors text-lg hover:bg-red-600 hover:text-white hover:border-2 hover:border-red-600"
        >
          Register
        </button>
      </div>
    </main>
  );
};

export default observer(Login);

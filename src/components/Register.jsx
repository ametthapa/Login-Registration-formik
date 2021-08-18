import { Formik, Form } from "formik";
import TextField from "./TextFeld";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  const validate = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Requiredl"),
    password: Yup.string()
      .required("Required")
      .min(8, "Passwords must be atleast 8 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    ),
    number: Yup.string()
      .min(10, "Must of 10 digits")
      .max(10, "Must be 10 digits"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        number: "",
        agree: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="h-full flex flex-col justify-center items-center relative">
        <div className="text-left font-bold text-2xl">Register</div>
        <Form>
          <TextField
            label="Name"
            name="name"
            type="text"
            placeholder="Full Name"
          />
          <TextField
            label="E-mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          <TextField
            label="Mobile Number"
            name="number"
            type="number"
            placeholder="Mobile Number"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Repeat Your Password"
          />
          <TextField className="" name="agree" type="checkbox" value="1" />
          <label className="inline-block">
            I accept{" "}
            <span className="text-green-500 border-b border-green-600 cursor-pointer">
              Terms and Condition
            </span>
            &
            <span className="text-green-500 cursor-pointer border-b border-green-600">
              Privacy Policy
            </span>
          </label>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-5 py-2 px-4 rounded w-full"
          >
            Sign up
          </button>
        </Form>
        <button className="text-blue-500 hover:text-blue-600 font-semibold text-lg transform hover:scale-125 transition duration-200 ease-in rounded absolute bottom-1">
          <Link to="/signin">Login</Link>
        </button>
      </div>
    </Formik>
  );
};

export default Register;

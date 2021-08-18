import { Formik, Form } from "formik";
import TextField from "./TextFeld";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().required("Provide Correct Email"),
    password: Yup.string().required("provide correct password"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        remember: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="h-full flex flex-col justify-center items-center relative">
        <div className="text-left font-bold text-2xl">Account Login</div>
        <Form>
          <TextField
            label="E-mail"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <TextField
            className="mt-8 mr-3"
            name="remember"
            type="checkbox"
            value="1"
          />
          <label>Remember me</label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-5 py-2 px-4 rounded w-full"
          >
            Sign in
          </button>
        </Form>
        <button className="text-green-500 hover:text-green-600 font-semibold text-lg transform hover:scale-125 transition duration-200 ease-in rounded absolute bottom-0">
          <Link to="/signun">Register</Link>
        </button>
      </div>
    </Formik>
  );
};

export default Login;

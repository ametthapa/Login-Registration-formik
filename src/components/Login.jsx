import { Formik, Form } from "formik";
import TextField from "./TextFeld";
import * as Yup from "yup";

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
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <div>Account Login</div>
        <Form>
          <TextField
            label="E-mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-5 py-2 px-4 rounded"
          >
            Sign in
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default Login;

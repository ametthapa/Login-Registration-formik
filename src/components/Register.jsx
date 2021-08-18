import { Formik, Form } from "formik";
import TextField from "./TextFeld";
import RadioButton from "./RadioButton";
import * as Yup from "yup";

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
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="h-full flex flex-col justify-center items-center">
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
          {/* <RadioButton label="Gender" name="gender" type="radio" value="Male" />

          <RadioButton name="gender" type="radio" value="female" /> */}

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
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-5 py-2 px-4 rounded"
          >
            Sign up
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default Register;

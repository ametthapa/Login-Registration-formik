import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="pt-4">
      <input
        className="p-1 outline-black"
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-400 text-sm font-semibold"
      />
    </div>
  );
};

export default TextField;

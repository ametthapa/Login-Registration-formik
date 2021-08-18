import { useField } from "formik";

const RadioButton = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...label} />
    </div>
  );
};

export default RadioButton;

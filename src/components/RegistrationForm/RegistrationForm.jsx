import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </label>
        <button className={styles.button} type="submit">
          Register
        </button>

        <div className={styles.loginLink}>
          Already have an account? <Link to="/login">Log in here</Link>
        </div>
      </Form>
    </Formik>
  );
}

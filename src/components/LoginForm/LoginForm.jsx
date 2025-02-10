import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom"; // импорт для создания ссылки

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
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
        <button type="submit" className={styles.button}>
          Log In
        </button>

        {/* Ссылка на страницу регистрации */}
        <div className={styles.signUpLink}>
          No account yet? <Link to="/register">Sign up here</Link>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;

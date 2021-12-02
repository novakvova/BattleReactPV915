import { useState, useRef } from "react";
// import InputGroup from "../../common/InputGroup";
import InputGroupFormik from "../../common/InputGroupFormik";
import { ILoginModel, LoginError } from "./types";
import { useActions } from "../../../hooks/useActions";
import { Formik, Form, FormikProps } from "formik";
import { validationFields } from "./validation";

const LoginPage = () => {
  const { loginUser } = useActions();

  const initialErrors: LoginError = {
    email: [],
    password: [],
    error: "",
  };

  const refFormik = useRef<FormikProps<ILoginModel>>(null);

  const initialState: ILoginModel = {
    email: "",
    password: "",
  };

  const [serverErrors, setServerErrors] = useState<LoginError>(initialErrors);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (values: ILoginModel) => {
    setIsSubmitted(true);

    try {
      console.log("Login begin");
      await loginUser(values);
      console.log("Login end");
      setIsSubmitted(false);
      //navigator("/");
    } catch (ex) {
      const serverErrors = ex as LoginError;
      //console.log("refFormik", );
      if (serverErrors.password.length != 0)
        refFormik.current?.setFieldError("password", serverErrors.password[0]);
      if (serverErrors.email.length != 0)
        refFormik.current?.setFieldError("email", serverErrors.email[0]);
      console.log("-------", serverErrors.error);
      //setServerErrors(serverErrors);
      //console.log("Login problem", serverErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Вхід</h1>

        <Formik
          innerRef={refFormik}
          initialValues={initialState}
          validationSchema={validationFields}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <InputGroupFormik
                label="Пошта"
                error={errors.email}
                onChange={handleChange}
                type="email"
                field="email"
                touched={touched.email}
                value={values.email}
              />

              <InputGroupFormik
                label="Пароль"
                error={errors.password}
                onChange={handleChange}
                type="password"
                field="password"
                touched={touched.password}
                value={values.password}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Вхід
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;

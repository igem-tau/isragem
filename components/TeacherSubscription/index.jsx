import { TextField } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import styles from "./TeacherSubscription.module.css";

export default function TeacherSubscription({
  title,
  text,
  labelText,
  placeholderText,
  sendText,
  sentMessage,
  errorsTexts,
  language,
  direction = "ltr",
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      className={styles.container}
      style={{ direction }}
      id='teachers_subscription'
    >
      <div className={styles.info_container}>
        <h3>{title}</h3>
        <p className={styles.information}>{text[0]}</p>
        <p className={styles.information}>{text[1]}</p>
      </div>
      {isSubmitted ? (
        <h3 className={styles.success_message}>{sentMessage}</h3>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = errorsTexts.required;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = errorsTexts.invalid;
            }
            return errors;
          }}
          onSubmit={async (values, { setFieldError }) => {
            const response = await fetch("/api/email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: values.email, language }),
            }).then((res) => res.json());
            if (!response?.success) {
              setFieldError("email", errorsTexts.server_error);
            } else {
              setIsSubmitted(true);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field_group}>
                <TextField
                  variant='filled'
                  type='email'
                  name='email'
                  required
                  size='small'
                  fullWidth
                  label={labelText}
                  placeholder={placeholderText}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.field}
                  color={errors.email ? "error" : undefined}
                />
                <span className={styles.error}>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className={styles.submit_button}
              >
                {isSubmitting ? <div className={styles.loader} /> : sendText}
              </button>
            </form>
          )}
        </Formik>
      )}
    </section>
  );
}

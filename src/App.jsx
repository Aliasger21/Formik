import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required."),
  password: yup.string().min(8, "Password must be at least 8 character.").required("Password is reuire"),
  confirmpassword: yup.string().oneOf([yup.ref('password'), 'Password must be watch']).required("Confirmpassword is require.")

})

function App() {
  const initialvalue = {
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  }

  const handlesubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  }

  return (
    <>
      <Formik initialValues={initialvalue} validationSchema={validationSchema} onSubmit={handlesubmit}>
        <Form>
          <div>
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name='email' component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

          </div>

          <div>
            <label>Confirm Password</label>
            <Field name="confirmpassword" type="password" />
            <ErrorMessage name="confirmpassword" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit">Sign Up</button>
        </Form>

      </Formik>
    </>
  )
}

export default App

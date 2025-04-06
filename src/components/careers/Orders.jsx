import React, { useState } from "react";
import { careerValSchema } from "../../hooks/Schema";
import { CareerFormData } from "../../hooks/DataPass";

import { Formik, Form, Field, ErrorMessage } from "formik";


const Orders = () => {
  const list = [
    "Sales Executive",
    "Digital Marketing",
    "Web Developer",
    "Finance",
    "Sales Manager",
  ];
  const [loading, setLoading] = useState(false);
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      {/* Images and Background */}
      <div className="w-full relative flex items-center justify-center">
        <img
          src="/Carrers/form-bg.webp"
          alt="diningss"
          className="w-full h-full absolute z-0"
        />

        {/* Content Section */}
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1 className="text-4xl font-semibold leading-9 text-white text-center">
            Don't miss out!
          </h1>

          {/* Subscription Form */}

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
              resume: "",
            }}
            validationSchema={careerValSchema}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              try {
                const { data, error } = await CareerFormData(values);
                resetForm();
              } catch (error) {
                console.log(error);
              } finally {
                setLoading(false);
              }
            }}
          >
            {({ touched, errors }) => (
              <Form className="flex flex-col items-center lg:w-8/12 w-full mt-12 space-y-4">
                {/* Name Input */}
                <div className="flex md:flex-row flex-col w-full gap-5">
                  <div className="w-full">
                    <Field
                      className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                      placeholder="Name"
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="form-error"
                    />
                  </div>

                  <div className="w-full">
                    {/* Email Input */}
                    <Field
                      className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="form-error"
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col w-full gap-5">
                  <div className="w-full">
                    {/* Phone Input */}
                    <Field
                      className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                      placeholder="Phone Number"
                      type="text"
                      id="phone"
                      name="phone"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="form-error"
                    />
                  </div>

                  {/* Roles Dropdown */}
                  <div className="w-full">
                    <Field
                      className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md bg-white placeholder-gray-500"
                      id="select"
                      as="select"
                      name="select"
                    >
                      <option value="">Select Role</option>
                      {list.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="select"
                      component="div"
                      className="form-error"
                    />
                  </div>
                </div>

                <Field name="resume" >
                  {({ field, form }) => (
                    <div className="w-full">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        autoComplete="off"
                        className="border border-gray-300 bg-white text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                        onChange={(event) => {
                          form.setFieldValue(
                            "resume",
                            event.currentTarget.files[0]
                          );
                        }}
                        // Do not spread field props here, as file inputs should not be controlled via value
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  name="resume"
                  component="div"
                  className="form-error"
                />

                {/* Message Box */}
                <Field
                  id="message"
                  as="textarea"
                  rows="5"
                  name="message"
                  placeholder="Message"
                  className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                />
                <ErrorMessage
                    name="message"
                    component="div"
                    className="form-error"
                  />

                {/* Submit Button */}
                <button
                type="submit"
                  disabled={loading}
                  className="focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-blue-500 w-full bg-blue-600 text-white py-4 px-6 rounded-md hover:bg-blue-500"
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Orders;

import React, { useState } from "react";
import { ChooseList } from "../../data/Navbar";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../hooks/Schema";
import { QueryForm } from "../../hooks/DataPass";

const ContactForm = () => {

  const [loading, setLoading] = useState(false);

  return (
    <header className="bg-gray-100 lg:py-20 md:pb-14 max-sm:pb-12 sec-padding">
      <div className="w-full flex justify-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl pt-0 xl:text-5xl font-semibold xl:leading-snug text-gray-900 2xl:text-3xl 2xl:leading-snug mb-10 text-center">
            Get a <span className="text-[#d29f6a]">Quotation</span></p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
              select: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              try {
                const { data, error } = await QueryForm(values);
                resetForm();
              } catch (error) {
                console.log(error);
              } finally {
                setLoading(false);
              }
            }}
          >
            {({ touched, errors }) => (
              <Form className="space-y-6">
                
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <div className="w-full">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                        className="w-full p-3 outline-none focus:border focus:border-blue-300 rounded-lg"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="form-error"
                      />
                    </div>

                    <div className="w-full">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email (optional)"
                        className="w-full p-3 outline-none focus:border focus:border-blue-300 rounded-lg"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="form-error"
                      />
                    </div>
                  </div>

               
                  <div>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      autoComplete="off"
                      placeholder="Mobile Number"
                      className="w-full p-3 outline-none focus:border focus:border-blue-300 rounded-lg"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="form-error"
                    />
                  </div>

                
                  <div>
                    <Field
                      as="select"
                      id="select"
                      name="select"
                      className="w-full p-3 outline-none focus:border focus:border-blue-300 rounded-lg"
                    >
                      <option value="">Select Service (optional)</option>
                      {ChooseList.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      autoComplete="off"
                      placeholder="Message"
                      className="w-full p-3 outline-none focus:border focus:border-blue-300 rounded-lg"
                      rows="4"
                    ></Field>
                  </div>
                <div>
                 
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#305764] text-white rounded-lg py-3.5 px-5 text-md hover:bg-[#d29f6a] shadow-lg"
                    >
                     {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </header>
  );
};

export default ContactForm;

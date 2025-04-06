import React, { useState } from "react";
import { ChooseList } from "../../data/Navbar";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../hooks/Schema";
import { QueryForm } from "../../hooks/DataPass";

import { LazyLoadImage } from 'react-lazy-load-image-component';

const HomeForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <header className="bg-gray-100 lg:py-20 md:pb-14 max-sm:pb-12">
      <div className="xl:grid place-items-center place-content-center xl:grid-cols-2 xl:max-w-screen-xl mx-auto w-11/12 gap-14">
        {/* Left Section */}
        <div className="max-w-xl mx-auto xl:max-w-2xl xl:-mt-8 ">
          <p
            className="text-2xl max-md:text-center pt-10 xl:text-5xl font-semibold xl:leading-snug text-gray-900 2xl:text-3xl 2xl:leading-snug mb-10"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            Get Amazing <span className="text-[#d29f6a]">Quotation</span> for
            your Business
          </p>

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
              <Form
                className="space-y-6"
                data-aos="zoom-in-right"
                data-aos-duration="1900"
              >
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

        {/* Right Section (Cards) */}
        <div
          className="w-full aspect-auto lg:flex hidden justify-center items-center"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <LazyLoadImage
            src="/Home/Contact-form.avif"
            alt="Form-image"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeForm;

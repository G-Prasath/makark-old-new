import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../hooks/Schema";
import { QueryForm } from "../../hooks/DataPass";
import { useNavigate } from "react-router-dom";

import BtnLoading from "../Common/BtnLoading";

const PageBannerForm = ({ serviceName }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="lg:bg-transparent bg-gray-200 lg:backdrop-blur-md w-full lg:p-10 p-5">
      <div className="flex items-center justify-center">
        <p className="lg:text-white text-[#305764] text-3xl font-semibold">
          Get a Quote
        </p>
      </div>
      <div className="">
        {/* Left Section */}
        <div className="w-full xl:-mt-8 ">
          <p
            className="text-2xl lg:pt-10 pt-0 xl:text-5xl font-semibold xl:leading-snug text-gray-900 2xl:text-3xl 2xl:leading-snug mb-10"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          ></p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
              select:serviceName
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              try {
                const { data, error } = await QueryForm(values);
                if (!error) {
                  setLoading(false);
                  navigate("/thank-you");
                  resetForm();
                }
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ touched, errors }) => (
              <Form
                className="space-y-6"
                data-aos="zoom-in-right"
                data-aos-duration="1900"
              >
                {/* <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"> */}
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

                {/* </div> */}

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

                <div>
                  <Field
                    type="text"
                    id="select"
                    name="select"
                    readOnly
                    className="w-full p-3 outline-none focus:border focus:border-blue-300 rounded-lg"
                    value={`${serviceName}`}
                  />
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
                    className={`w-full ${
                      loading ? "bg-none" : "bg-[#305764] hover:bg-[#d29f6a]"
                    }  text-white rounded-lg py-3.5 px-5 text-md shadow-lg`}
                  >
                    {loading ? <BtnLoading /> : "Submit"}
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

export default PageBannerForm;

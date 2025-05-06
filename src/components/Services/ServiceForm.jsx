import React, { useState } from "react";
import { ChooseList } from "../../data/Navbar";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../hooks/Schema";
import { QueryForm } from "../../hooks/DataPass";
import { useNavigate } from "react-router-dom";
import BtnLoading from "../Common/BtnLoading";

const ServiceForm = ({ serviceName }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="pt-5 pb-5">
      <div className="">
        <div className="flex justify-center border border-t-red-700 rounded-tr-lg rounded-tl-lg">
          <div className="bg-white relative p-5 md:px-20 rounded-lg overflow-hidden flex justify-between w-full">
            <div className="absolute top-0 right-0">
              <img
                src="https://i.ibb.co/bRJVsq5/contact-us-box-bg.png"
                alt="signup"
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-8 relative w-full">
              <div
                className="space-y-6 md:w-3/5 w-full p-5"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <h2 className="text-xl md:text-3xl font-semibold text-white md:text-[#ef4444] text-center uppercase">
                  Get a Quote
                </h2>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    select: serviceName,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { resetForm }) => {
                    setLoading(true);
                    try {
                      setTimeout(() => {
                        setLoading(false);
                        navigate("/thank-you");
                        resetForm();
                      }, 1000);
                      const { data, error } = await QueryForm(values);
                    } catch (error) {
                      console.log(error);
                      setLoading(false);
                    }
                  }}
                >
                  {({ touched, errors }) => (
                    <Form className="space-y-4">
                      <div className="form-group">
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="form-error"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="form-error"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="form-error"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="select"
                          name="select"
                          className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                          value={serviceName}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          id="message"
                          name="message"
                          as="textarea"
                          autoComplete="off"
                          placeholder="Enter Message here"
                          rows={3}
                          className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                        ></Field>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          disabled={loading}
                          className={`${
                            loading ? "bg-none" : "bg-red-500 hover:bg-red-600"
                          }  w-full text-white font-semibold uppercase py-2 px-8 rounded-md cursor-pointer transition`}
                        >
                          {loading ? <BtnLoading /> : "Submit"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;

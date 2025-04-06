import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../hooks/Schema";
import { QueryForm } from "../../hooks/DataPass";

const CivilForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="pt-5 pb-5 mb-10">
      <div className="w-full flex max-md:flex-col-reverse">
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img
            src="/civil/civilform.avif"
            alt="signup"
            className="w-full aspect-square"
          />
        </div>

        <div className="flex w-full md:1/2">
          <div
            className="space-y-6 md:w-11/12 w-full p-5"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <h2 className="text-xl md:text-3xl font-semibold text-[#305764] text-center uppercase">
              Get a Quote
            </h2>
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
                <Form className="space-y-4">
                  <div className="form-group">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="w-full py-3 px-4 rounded-md border border-[#305764] outline-none"
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
                      className="w-full py-3 px-4 rounded-md border border-[#305764] outline-none"
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
                      className="w-full py-3 px-4 rounded-md border border-[#305764] outline-none"
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
                      className="w-full py-3 px-4 rounded-md border border-[#305764] outline-none"
                      value={`Civil Construction`}
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
                      className="w-full py-3 px-4 rounded-md border border-[#305764] outline-none"
                    ></Field>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#305764] w-full text-white font-semibold uppercase py-2 px-8 rounded-md cursor-pointer hover:bg-[#305764] transition"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilForm;

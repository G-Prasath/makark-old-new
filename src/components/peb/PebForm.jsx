import React, { useState } from "react";
import { ChooseList } from "../../data/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../hooks/Schema";
import { QueryForm } from "../../hooks/DataPass";
import { useNavigate } from "react-router-dom";
import BtnLoading from "../Common/BtnLoading";

const PebForm = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="bg-gray-100 flex bg-local"
        style={{
          backgroundImage:
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/architect.svg')",
        }}
      >
        <div className="mx-auto max-w-6xl bg-white md:py-20 py-10 md:px-12 px-2 lg:px-24 shadow-xl my-24">
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
              <Form>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Name
                      </label>
                      <Field
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="form-error"
                      />
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="title"
                      >
                        Email
                      </label>
                      <Field
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email (optional)"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="form-error"
                      />
                    </div>
                  </div>

                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Phone
                      </label>
                      <Field
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        type="text"
                        id="phone"
                        name="phone"
                        autoComplete="off"
                        placeholder="Mobile Number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="form-error"
                      />
                    </div>

                    <div className="md:w-1/2 px-3">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="title"
                      >
                        Services
                      </label>
                      <Field
                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                        as="select"
                        id="select"
                        name="select"
                      >
                        <option value="">Select Service (optional)</option>
                        {ChooseList.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                  <div className="md:flex mb-6 w-full">
                    <div className="mb-6 md:mb-0 w-full">
                      <label
                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Messages
                      </label>
                      <Field
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        rows={4}
                        id="message"
                        name="message"
                        as="textarea"
                        autoComplete="off"
                        placeholder="Message"
                      ></Field>
                    </div>
                  </div>

                  <div className="-mx-3 md:flex mt-2">
                    <div className="md:w-full px-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full ${
                          loading
                            ? "bg-none"
                            : "bg-gray-900 hover:border-b-2 border-gray-500 hover:border-gray-100"
                        } text-white font-bold py-2 px-4 border-b-4  rounded-full`}
                      >
                        {loading ? <BtnLoading /> : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PebForm;

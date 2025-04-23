import React, { useState, useEffect, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { ChooseList } from "../../data/Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../hooks/Schema";
import { QueryForm } from "../../hooks/DataPass";

import BtnLoading from "./BtnLoading";

const ContactForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div
        ref={formRef}
        className="bg-blue-50 p-8 rounded-lg w-full max-w-md relative"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl text-gray-500">Contact Us</h2>
          <IoCloseCircle
            onClick={onClose}
            className="text-2xl cursor-pointer text-red-400 hover:text-red-600"
          />
        </div>

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
              if (!error) {
                setLoading(false);
                resetForm();
                onClose(); // Close the form
                navigate("/thank-you"); // Redirect to /thank-you page
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ touched, errors }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  className="mt-1 p-2  block outline-none focus:border focus:border-blue-300 w-full border-gray-300 rounded-md shadow-sm"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="form-error"
                />
              </div>
              <div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email (optional)"
                  className="mt-1  p-2   outline-none focus:border focus:border-blue-300 block w-full border-gray-300 rounded-md shadow-sm"
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
                  id="phone"
                  name="phone"
                  autoComplete="off"
                  placeholder="Contact Number"
                  className="mt-1  p-2   outline-none focus:border focus:border-blue-300 block w-full border-gray-300 rounded-md shadow-sm"
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
                  className="mt-1  p-2   outline-none focus:border focus:border-blue-300 block w-full border-gray-300 rounded-md shadow-sm"
                >
                  <option value="">Select a service (optional)</option>
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
                  className="mt-1 block w-full p-2 outline-none focus:border focus:border-blue-300 rounded-md shadow-sm"
                ></Field>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading ? "bg-none" : "bg-blue-500 hover:bg-blue-600"
                } text-white py-2 rounded-md `}
              >
                {loading ? <BtnLoading /> : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;

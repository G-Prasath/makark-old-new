import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ChooseList = ["Service 1", "Service 2", "Service 3"]; // Example service options

const ContactSection = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    select: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address"),
    phone: Yup.string().required("Mobile number is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full lg:h-screen">
      {/* Left Side (Map) */}

      <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <div className="mb-10 text-center lg:text-left">
          <p className="lg:text-4xl text-2xl font-bold mt-4">
            On Time Everytime
              <br />
             Let us work on your Dream with you!
          </p>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              {/* Name and Email fields */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="w-full">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    className="w-full p-3 outline-none focus:border bg-slate-50 focus:border-blue-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="w-full">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email (optional)"
                    className="w-full p-3 outline-none focus:border bg-slate-50 focus:border-blue-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Phone field */}
              <div>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  autoComplete="off"
                  placeholder="Mobile Number"
                  className="w-full p-3 outline-none focus:border bg-slate-50 focus:border-blue-300 rounded-lg"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Select field for Services */}
              <div>
                <Field
                  as="select"
                  id="select"
                  name="select"
                  className="w-full p-3 outline-none focus:border bg-slate-50 focus:border-blue-300 rounded-lg"
                >
                  <option value="">Select Service (optional)</option>
                  {ChooseList.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Field>
              </div>

              {/* Message field */}
              <div>
                <Field
                  id="message"
                  name="message"
                  as="textarea"
                  autoComplete="off"
                  placeholder="Message"
                  className="w-full p-3 outline-none focus:border bg-slate-50 focus:border-blue-300 rounded-lg"
                  rows="4"
                ></Field>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#305764] text-white rounded-lg py-3.5 px-5 text-md hover:bg-[#d29f6a] shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Side (Form Section) */}
      <div className="lg:w-1/2 h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.985461535976!2d80.2122806!3d13.0359031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266de74ad88a3%3A0xd842d88783c1bd4!2sAshok%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726813255662!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;

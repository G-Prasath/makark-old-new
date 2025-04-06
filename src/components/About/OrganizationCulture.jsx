import React from "react";
import Heading from "../Common/Heading/Heading";

const OrganizationCulture = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto md:py-20 py-10 px-5 lg:px-10">
        <Heading title="Organization Culture" secTitle="Respects" />

        <div className="flex flex-col gap-6 mt-16">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
              <img
                src="/About/organization-culture-1.webp"
                alt="Hanna Lubin"
                className="w-full h-full object-cover aspect-video lg:aspect-square"
                data-aos="zoom-out-right"
                data-aos-duration="700"
              />
            </div>
            <div
              className="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-4 lg:p-14"
              data-aos="zoom-out-left"
              data-aos-duration="700"
            >
              <p className="text-slate-950 font-medium opacity-75 leading-loose text-justify">
                The organizational culture is one of the foundations for both
                the organization and its employee’s commitment. Based on the
                principles of unity, innovation and commitment to excellence.
                Mekark ensures that all employees are inspired and encouraged at
                the workplace. It is a company with strong ethical standards as
                they have made ethics, responsibility and teamwork foster every
                mission and teamwork.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-6">
            <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
              <img
                src="/About/organization-culture-2.webp"
                alt="Erin Calzoni"
                className="w-full h-full object-cover aspect-video lg:aspect-square"
                data-aos="zoom-out-left"
                data-aos-duration="700"
              />
            </div>
            <div
              className="w-full lg:w-9/12 bg-blue-100 rounded-3xl flex flex-col justify-center p-4 lg:p-14"
              data-aos="zoom-out-right"
              data-aos-duration="700"
            >
              <p className="text-slate-950 opacity-75 font-medium leading-loose text-justify">
                The company values direct communication through which every
                person is given an opportunity to contribute to decision making
                and this fosters to team cohesion. Such an approach helps to
                empower the employees to accept full responsibility to improve
                efficiency. It also fosters career development, with the company
                providing resources and training opportunities for every
                employee.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
              <img
                src="/About/organization-culture-3.webp"
                alt=""
                className="w-full h-full object-cover aspect-video lg:aspect-square"
                data-aos="zoom-out-right"
                data-aos-duration="700"
              />
            </div>
            <div
              className="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-4 lg:p-14"
              data-aos="zoom-out-left"
              data-aos-duration="700"
            >
              <p className="text-slate-950 font-medium opacity-75 leading-loose text-justify">
                Mekark encourages the respect of others and cooperation to
                ensure everyone in the organisation gives their best performance
                consistently. This strong foundation does not only enhance the
                performance of an employee but a team as a whole, creates
                positive feedbacks and ensures Mekark to deliver quality results
                that meets clients and achievement of corporate objectives and
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganizationCulture;

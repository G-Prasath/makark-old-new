import React from "react";

const CivilFAQ = ({data}) => {
  return (
    <div
      id="faq"
      className="mx-auto max-w-2xl divide-y divide-gray-900/10 lg:max-w-7xl p-4 md:p-8 dark:bg-gray-800 mb-10"
    >
      <h2 className="mt-2 font-header text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
        {data.map(({ question, answer }, index) => (
          <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300">
              {question}
            </dt>
            <dd className="mt-4 lg:col-span-9 lg:mt-0">
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                {answer}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CivilFAQ;

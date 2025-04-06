import Heading from "../Common/Heading/Heading";

const WhyChoose = ({ data }) => {
  return (
    <div className="py-12 bg-white w-full sec-padding mb-10">
      <Heading title={`Why Choose`} secTitle={`Mekark`} />
      <div className="md:mt-10 mt-5 px-4 grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center justify-center">
        {/* Left Features List */}
        <div>
          <ul className="grid grid-cols-1 justify-start md:gap-y-5 md:gap-x-10">
            {data.slice(0, 3).map((feature, index) => (
              <FeatureItem
                key={index}
                iconPath={feature.iconPath}
                title={feature.title}
                subtitle={feature.subtitle}
              />
            ))}
          </ul>
        </div>

        {/* Center Image */}
        <div>
          {data.slice(6).map((feature, index) => (
            <div
            key={index}
              className="md:h-[500px] max-md:aspect-square mx-auto rounded bg-cover bg-right shadow-lg"
              style={{
               
                backgroundImage:
                  `url(${feature.img})`,
              }}
            ></div>
          ))}
        </div>

        {/* Right Features List */}
        <div>
          <ul className="grid grid-cols-1 justify-start md:gap-y-5 md:gap-x-10">
            {data.slice(3, 6).map((feature, index) => (
              <FeatureItem
                key={index}
                iconPath={feature.iconPath}
                title={feature.title}
                subtitle={feature.subtitle}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ iconPath, title, subtitle }) => (
  <li className="my-5 md:mt-0">
    <div className="flex justify-center items-center">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md text-[#2e4750]">
          <svg
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={iconPath}
            />
          </svg>
        </div>
      </div>
      <div className="ml-4">
        {/* <h4 className="text-lg leading-6 text-gray-900 font-semibold">
          {title}
        </h4> */}
        <p className="text-gray-500 text-justify">{subtitle}</p>
      </div>
    </div>
  </li>
);

export default WhyChoose;

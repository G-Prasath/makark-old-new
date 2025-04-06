
import React from "react";

const Profile = () => {
    const data = [
        {
          number: 1,
          title: "Start your account",
          description:
            "You get a 2-week free trial to kick the Smarty tires. We want you to get the full experience.",
        },
        {
          number: 2,
          title: "Learn to learn",
          description:
            "We give you a free course that guides you through the process of learning.",
        },
        {
          number: 3,
          title: "Use learning materials",
          description:
            "Use our multimedia lectures, videos, and coaching sessions. Unlimited everything!",
        },
        {
          number: 4,
          title: "Create a success story",
          description:
            "With access to online learning resources anyone can transform their lives in meaningful ways.",
        },
      ]

  return (
    <main className="min-h-screen my-20 grid grid-cols-12 container mx-auto md:px-10 px-5 py-14 gap-x-5 place-content-center ">
      {/* Hero Section */}
      <h1 className="col-span-12 lg:col-span-7 font-bold text-xl md:text-3xl lg:text-4xl self-center">
        Your personalized learning journey
      </h1>
      {/* <p className="col-span-12 mt-5 lg:mt-0 lg:col-span-5 self-center text-gray-700 text-lg">
        Smarty gives you the platform and knowledge you need to succeed. One
        tool could change everything.
      </p> */}

      {/* Steps Section */}
      <article className="col-span-12 grid grid-cols-12 gap-x-5 md:mt-16 xl:mt-10 2xl:mt-5 items-center">
        {/* Steps Details */}
        <div className="order-2 md:order-1 col-span-12 lg:col-span-7 grid sm:grid-cols-2 gap-7 lg:gap-x-0 md:gap-y-16">
          {data.map((step, index) => (

            <div className="lg:max-w-[80%]" key={index}>
              <p className="number flex items-end text-5xl font-bold">
                {step.number}
                <span className="inline-block bg-red-400 h-1.5 rounded-full w-1.5 mb-1"></span>
              </p>
              <h2 className="text-xl lg:text-2xl font-bold my-4">
                {step.title}
              </h2>
              <p className="text-gray-700 text-lg">{step.description}</p>
            </div>

            
          ))}
        </div>

        {/* Image Section */}
        <img
          src="/Carrers/carrer-profile-1.webp"
          className="max-w-full aspect-[3/2] lg:aspect-square object-cover col-span-12 my-10 md:mb-0 md:mt-14 lg:my-0 lg:col-span-5 rounded-xl shadow-md lg:h-full order-1"
        />
      </article>
    </main>
  );
};

export default Profile;

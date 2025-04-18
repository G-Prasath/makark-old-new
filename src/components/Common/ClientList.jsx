import React, { useEffect } from 'react';
import "./css/Client.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ClientList = () => {
    useEffect(() => {
        // Duplicate the logo list to create an infinite scroll effect
        const ul = document.querySelector('[data-ref="logos"]');
        if (ul) {
          const clone = ul.cloneNode(true); // Clone the original list
          clone.setAttribute('aria-hidden', 'true'); // Make it hidden for accessibility
          ul.parentNode.appendChild(clone); // Append the clone after the original list
        }
      }, []);
    return (
        <div className="relative font-inter antialiased">
            <main className="relative flex flex-col justify-center bg-slate-900 overflow-hidden">
                <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                    <div className="text-center">
                        {/* Logo Carousel animation */}
                        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            <ul
                                data-ref="logos"
                                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                            >
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg" alt="Facebook" />
                                </li>
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg" alt="Disney" />
                                </li>
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg" alt="Airbnb" />
                                </li>
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" />
                                </li>
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" />
                                </li>
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg" alt="Samsung" />
                                </li>
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" />
                                </li>
                                <li>
                                    <LazyLoadImage src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" />
                                </li>
                            </ul>
                        </div>
                        {/* End: Logo Carousel animation */}
                    </div>
                </div>
            </main>
        </div>
    )
}



export default ClientList

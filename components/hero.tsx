'use client'

import { useEffect } from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import dynamic from 'next/dynamic';

const DynamicModalVideo = dynamic(() => import('@/components/modal-video'), { ssr: false });

export default function Hero() {
  useEffect(() => {
    const waitlistScript = document.createElement('script');
    waitlistScript.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    waitlistScript.async = true;
    document.body.appendChild(waitlistScript);

    return () => {
      document.body.removeChild(waitlistScript);
    };
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <svg className="max-w-full" width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG code */}
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Peach Fit</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Join the Peach Fit network where gyms earn up to 3x per booking than competitors, all while become an owner in the network building a stronger fitness community for all.</p>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">The first 1,000 locations to sign up receive in aggregate <b>10% ownership</b> in the network.</p>
            {/* Iframe */}
          <div id="getWaitlistContainer" data-waitlist_id="8890" data-widget_type="WIDGET_2" className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"></div>
          <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css" />
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
        
          </div>


          {/* <DynamicModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}

        </div>

      </div>
    </section>
  );
}

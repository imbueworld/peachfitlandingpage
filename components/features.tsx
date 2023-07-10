'use client'

import { useState } from 'react';
import Slider from 'react-input-slider';


export default function Features() {

  const [x, setX] = useState(100);

const calculateEarnings = (membershipCost: number) => {
  return membershipCost * 0.1475;
};


  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">A network owned by the gyms supplying the services</h2>
            <p className="text-xl text-gray-400">Or as we like to say, the way it should be.</p>
          </div>

          {/* Slider component */}
          <div className='flex flex-col items-center justify-center text-center mb-10'>
            <h3 className="h2 mb-4">Potential earnings</h3>
            <Slider
              axis="x"
              x={x}
              xmin={30}
              xmax={300}
              onChange={({ x }) => setX(x)}
            />
            {/* <div className="space-y-4"></div> */}
            <div className='flex flex-col items-center justify-center text-center mb-10'>
              <p>Membership Cost: ${x}</p>
              <p>Estimated earnings per visit: ${calculateEarnings(x)}</p>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">The first locations</h4>
              <p className="text-lg text-gray-400 text-center">The first 25,000 locations that sign up to the network will receive 25% ownership in the network, vested over 4 years</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Treasury</h4>
              <p className="text-lg text-gray-400 text-center">Bringing in new gyms? Incentiving users? More ownership to the existing studios? 30% of ownership is all you're choice.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Higher Payouts</h4>
              <p className="text-lg text-gray-400 text-center">A new proprietary payout model ensures that gyms are paid out better than the competitors in the space, in many cases 3x more.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

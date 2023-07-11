'use client'

import { clear } from 'console';
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
          <div className='flex flex-col items-center justify-center text-center mb-10'
            style={{
              backgroundColor: 'white', // Set your desired background color
              padding: '20px', // Adjust padding as needed
              borderRadius: '15px', // Adjust to achieve the rounded corners you want
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Optional: Add a little box-shadow for a "lifted" effect
            }}
          >
          <h3 className="h2 mb-6" style={{ color: '#151719' }}>Potential earnings</h3>
          <Slider
            axis="x"
            x={x}
            xmin={30}
            xmax={300}
            onChange={({ x }) => setX(x)}
            
          />
          {/* <div className="space-y-4"></div> */}
          <div className='flex flex-col items-center justify-center text-center mb-10'>
            <p style={{ marginTop: '10px', color: '#151719' }}>Membership Cost: ${x}</p>
            <p style={{ marginTop: '10px', color: '#151719' }}>Estimated earnings per visit: ${calculateEarnings(x)}</p>
          </div>
        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" />
              <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
            </svg>
            <h4 className="h4 mb-2">The first locations</h4>
            <p className="text-lg text-gray-400 text-center">The first 25,000 locations that sign up to the network will receive 25% ownership in the network, vested over 4 years</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" />
              <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg>
            <h4 className="h4 mb-2">Treasury</h4>
            <p className="text-lg text-gray-400 text-center">Bringing in new gyms? Incentiving users? More ownership to the existing studios? 30% of ownership is all you're choice.</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" />
              <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
              </g>
            </svg>
            <h4 className="h4 mb-2">Higher Payouts</h4>
            <p className="text-lg text-gray-400 text-center">A new proprietary payout model ensures that gyms are paid out better than the competitors in the space, in many cases 3x more.</p>
          </div>

          {/* 4th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" />
              <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
              </g>
            </svg>
            <h4 className="h4 mb-2">Your Gym, Empowered</h4>
            <p className="text-lg text-gray-400 text-center">Take the reins with Peach Fit. Reap the rewards of higher payouts than competing platforms, and voice your perspectives in shaping the direction of the company. Peach Fit is a platform that stands for you, the service provider.</p>
          </div>

          {/* 5th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" />
              <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
              </g>
            </svg>
            <h4 className="h4 mb-2">A Partner, Not a Provider</h4>
            <p className="text-lg text-gray-400 text-center">We invite you to join us not only as a service provider but as a stakeholder. Peach Fit's innovative model offers you a stake in the business, so we flourish together. Let's transform the fitness industry into a more rewarding and sustainable venture.</p>
          </div>

          {/* 6th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" />
              <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
              </g>
            </svg>
            <h4 className="h4 mb-2">Quality and Diversity</h4>
            <p className="text-lg text-gray-400 text-center">Embrace the opportunity to showcase your offerings on a dynamic platform that values quality and diversity. Connect with health and fitness enthusiasts across the nation who are eager to explore what you have to offer.</p>
          </div>

        </div>

      </div>
    </div>
    </section >
  )
}

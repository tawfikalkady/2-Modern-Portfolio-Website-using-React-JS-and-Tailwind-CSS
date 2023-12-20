import React from 'react';
import facebook from '../assets/socials/facebook.png'
import instagram from '../assets/socials/instagram.png'
import dribble  from '../assets/socials/dribbble.png'
import email from '../assets/socials/sms.png'

const Footer = () => {
  return (
    <div className='md:px-10 px-7 mt-24'>
      <div className='text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5'>
        <p>@copyright 2022 | Jayjay Dinero Dinero</p>
        <p className='hidden sm:block'>fullstack developer</p>
        <p className='hidden sm:block'>UI designer </p>
        <p className='hidden sm:block'>Data analysis </p>
        <p className='hidden sm:block'>designed by @ernestechie </p>
      </div>

      {/* social media */}
      <div className='flex mb-5 justify-center md:justify-start '>
        <a 
        href='https://www.linkedin.com/in/tawfik-mohamed-531ba1247/'
        target='_blank'
        rel='noreferrer'
        >
          <img src={facebook} alt=''/>
        </a>

        <a 
        href='https://github.com/tawfikalkady'
        target='_blank'
        rel='noreferrer'
        >
          <img src={instagram} alt=''/>
        </a>

        <a 
        className='ml-4'
        href='mailto:anpch@example.com'
        target='_blank'
        rel='noreferrer'
        >
          <img src={dribble} alt=''/>
        </a>

        <a 
        className='ml-4'
        href='mailto:anpch@example.com'
        target='_blank'
        rel='noreferrer'
        >
          <img src={email} alt=''/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
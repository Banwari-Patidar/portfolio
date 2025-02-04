import React from "react";
import TitleInfo from "./titleinfo";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";

function Hero() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:justify-center'>
        <div className='lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center'>
          <img
            className='object-cover object-center rounded-full'
            alt='hero'
            src='/profile.png'
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <TitleInfo name='About Me' icon='😊' />
          <h1 className='title-font sm:text-4xl text-3xl mt-2 mb-4 font-semibold text-white'>
            I&apos;m Banwari Patidar, an{" "}
            <br className='hidden lg:inline-block' />
            iOS and React Native Developer
          </h1>
          <p className='mb-8 leading-relaxed'>
            Experienced mobile application developer with a track record of
            delivering high-quality mobile applications. Skilled in implementing
            best practices for efficient and scalable code. Passionate about
            pushing boundaries in mobile app development to drive business
            success.
          </p>
          <div>
            <p className='text-white mb-2'>Education</p>
            <p className='mb-8 leading-relaxed'>
              I completed my undergraduate degree and later pursued a
              Master&apos;s in Computer Applications. Along the way, I
              discovered my passion for coding and have been dedicated to
              enhancing my skills in the field ever since.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-3'>
            <button
              data-cal-namespace='30min'
              data-cal-link='banwaripatidar/30min'
              data-cal-config='{"layout":"month_view"}'
              className='bg-primary hover:brightness-90 duration-300 flex justify-center items-center gap-2 text-white px-4 py-3 rounded-full font-semibold'
            >
              <CiCalendar size={23} color='#ffffff' />
              <span className=''>Book my Cal</span>
            </button>
            <Link
              target='_blank'
              href={
                "https://drive.google.com/file/d/1uBIf0iVTB1Xun_cnWDNUpW_9F8xsqSiU/view?usp=share_link"
              }
            >
              <button className='group relative inline-block hover:animate-pulse px-2 duration-300 justify-center items-center gap-2 text-primary  py-3 rounded-full font-semibold'>
                <span className=''>Hiring? Check out my CV.</span>
                <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-current group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out origin-center' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

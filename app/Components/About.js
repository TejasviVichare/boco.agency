'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Heading from './Heading';
import Button from './Button';
import Talktous from './Talktous';
import AuditButton from './AuditButton';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const res = await fetch("http://localhost:1337/api/about?populate=*");
        const data = await res.json();

        if (data.data) {
          setAboutData({
            title: data.data.Heading,
            description: data.data.description,
            imageUrl: data.data.aboutimg ? `http://localhost:1337${data.data.aboutimg.url}` : null,
            mobileImageUrl: data.data.Mobileimg ? `http://localhost:1337${data.data.Mobileimg.url}` : null,
          });
        }
      } catch (error) {
        console.error("Error fetching About section:", error);
      }
    }

    fetchAboutData();
  }, []);

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-start justify-start h-full">
      {/* Left Section (Content) */}
      <div className="md:pl-36 p-3 flex flex-col items-start justify-start h-full self-start md:pt-28">
        {aboutData && <Heading heading={aboutData.title} />}
        
        <div className="pt-2 font-medium text-lg md:text-xl">
          {aboutData?.description?.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index} className="pt-2 font-medium purple text-lg md:text-xl">{block.children[0].text}</p>;
            } else if (block.type === "list") {
              return (
                <ul key={index} className="pt-5 font-semibold purple text-lg md:text-xl pl-2 md:pl-4 ">
                  {block.children.map((item, i) => (
                    <li key={i} >
                      <span className="text-purple-400 pr-2">&#10003;</span>
                      <span>
                      {item.children[0].text}
                        </span> 
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
        
        {/* Buttons */}
        <div className="w-full flex flex-col-reverse md:flex-row mt-10 md:mt-10 gap-5 text-left justify-start">
          <div className="hidden md:flex">
            <Button text="Audit your Website" />
          </div>
          <div className="flex md:hidden w-full">
            <AuditButton />
          </div>
          <Talktous text="Talk to Us" />
        </div>
      </div>
      
      {/* Right Section (Image) for mobile */}
      <div className="md:hidden pt-3 w-full flex justify-center">
        {aboutData?.mobileImageUrl && <img src={aboutData.mobileImageUrl} alt="About Image Mobile" width={800} height={673} className="w-full max-w-md md:max-w-full" />}
      </div>
      
      {/* Right Section (Image) */}
      <div className="hidden pt-3 w-full md:flex justify-end">
        {aboutData?.imageUrl && <img src={aboutData.imageUrl} alt="About Image" width={800} height={939} style={{ width: '75%' }} />}
      </div>
    </div>
  );
};

export default About;

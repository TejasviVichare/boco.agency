'use client';
import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import StunninglyCraftedSlider from './StunninglyCraftedSlider';

const StunninglyCrafted = () => {
  const [content, setContent] = useState(null);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/stunningly-crafteds?populate=*');
        const data = await response.json();

        console.log('API Response:', data); 

        if (data?.data?.length > 0) {
          setContent(data.data[0]); 
        }
      } catch (error) {
        console.error('Error fetching Stunningly Crafted data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="w-full justify-center md:text-center text-left pl-3 pt-10">
      {content ? (
        <>
      
          <Heading
            heading={
              <>
                {content.title.split(' ').slice(0, 4).join(' ')} <br />
                {content.title.split(' ').slice(4).join(' ')}
              </>
            }
          />

          <p className="pt-10 font-medium purple text-lg md:text-xl mb-10">
            {content.description
              ?.map((desc) =>
                desc.children?.map((child) => child.text).join(' ')
              )
              .filter((text) => text.trim() !== '') 
              .join('\n')}
          </p>
        </>
      ) : (
        <p>Loading content...</p>
      )}
    </div>
    <StunninglyCraftedSlider />
    </>
  );
};

export default StunninglyCrafted;

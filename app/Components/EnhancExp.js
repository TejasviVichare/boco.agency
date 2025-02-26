import React from 'react'
import Heading from './Heading'
import ConversionRate from '../../public/assets/Conversion-Rate.png'
import UIUX from '../../public/assets/UI-UX-design.png'
import WebDevelopment from '../../public/assets/Web-development.png'
import Image from 'next/image'
const EnhancExp = () => {
  return (
    <div className=' mt-20 mb-10 px-2'>
        <div className='w-full text-center'>
         <Heading heading={<>Enhance customer experience <br />  by focusing on the details that matters most</>}/>
        </div>

        <div className='flex flex-col md:flex-row gap-6 justify-center mt-20'>
            <div className='p-4 border rounded-md pr-28' style={{backgroundColor:'#F4F1FF', border:'solid 1px #ddd1fa'}} >
                <Image src={ConversionRate} alt="Image"  width={180} height={180} className='mb-4'/>
                <Heading heading={<span className="text-4xl">Conversion Rate <br/> Optimisation</span>}/>
                <ul className="pt-5  purple text-lg md:text-xl pl-2 md:pl-4 ">
                <li><span className="text-purple-400 pr-2">&#10003;</span> Design Optimization</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Speed Optimization</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> On Page SEO</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Tech Maintenance & Support</li>

                </ul>
            </div>
            <div className='p-4 border rounded-md pr-28' style={{backgroundColor:'#F4F1FF', border:'solid 1px #ddd1fa'}} >
                <Image src={UIUX} alt="Image"  width={180} height={180} className='mb-4'/>
                <Heading heading={<span className="text-4xl">UI / UX <br/> Design</span>}/>
                <ul className="pt-5  purple text-lg md:text-xl pl-2 md:pl-4 ">
                <li><span className="text-purple-400 pr-2">&#10003;</span> Landing Pages</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Visual Identity (Web & Digital)</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Icons & Illustrations</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Assets & Components</li>

                </ul>
            </div>
            <div className='p-4 border rounded-md pr-28' style={{backgroundColor:'#F4F1FF', border:'solid 1px #ddd1fa'}}>
                <Image src={WebDevelopment} alt="Image"  width={180} height={180} className='mb-4'/>
                <Heading heading={<span className="text-4xl">Web<br/> Development  </span>}/>
                <ul className="pt-5  purple text-lg md:text-xl pl-2 md:pl-4 ">
                <li><span className="text-purple-400 pr-2">&#10003;</span> Code & E-commerce Customization</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Third Party & Custom Apps</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Front End Development</li>
                <li><span className="text-purple-400 pr-2">&#10003;</span> Back end & CMS Setup</li>

                </ul>
            </div>
        </div>

    </div>
  )
}

export default EnhancExp
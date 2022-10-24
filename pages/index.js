import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import tanjeem from "../public/tanjeem-01.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode]= useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tanzeem Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900'>

      <section className="min-h-screen dark:text-white">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Tanjeem</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
            </li>
            <li><a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="https://drive.google.com/file/d/1CWF4sdFiIPSGf3uuJOZtlOhLPDvkjmO7/view?usp=sharing">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h6 className="text-md font-burtons">Hello! My name is,</h6>
          <h2 className="text-5xl py-2 text-teal-600 font-bold
           md:text-6xl ">Tanjeem </h2>
          <h3 className="text-2xl py-2 font-semibold md:text-3xl">Front-end Developer, Designer</h3>
          <p  className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white"> Turning ideas into real life products</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
         <a className="cursor-pointer" href="https://www.linkedin.com/in/tanjeemadeeb/">
            <AiFillLinkedin />
         </a>
         <a className="cursor-pointer" href="https://twitter.com/Adeeb310">
            <AiFillTwitterCircle/>
         </a>
         <a className="cursor-pointer" href="https://www.youtube.com/channel/UCt08PXukXGdUhA6IOD7BE3A">
            <AiFillYoutube/>
         </a>
        </div>
        <div className="relative mx-auto w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96"> 
          <Image src={tanjeem} layout="fill" objectFit="cover" alt="portfolio"/>
        </div>
      </section>
      <section>
        <div className="dark:text-white">
          <h3 className="text-3xl pt-10 font-bold"> Services I offer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">Since the beginning of my journey as a freelance developer, Ive done remote work for
          <span className="text-teal-500"> agencies </span> consulted for <span className="text-teal-500"> startups </span> and collaborated with talented people to create digital products for both business and consumer use. 
          </p>

          <p className="text-md py-5 leading-8 text-gray-800 dark:text-white"> I offer wide range of services, including
          <span className="text-teal-500 font-bold"> Web Development & User Interface Design</span>
          </p>
        </div>
        
        <div className="lg:flex gap-10 dark:text-white">
          
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800">
            <Image src={code} width={100} height={100} alt="portfolio"/>
            <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
            <p>I build fast, robust, and adaptable web apps</p>
            <h4 className="text-teal-500"> Frameworks I use</h4>
            <p className="text-gray-800 py-1 dark:text-white">React</p>
            <p className="text-gray-800 py-1 dark:text-white">Next Js</p>
            <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
          </div>
          
          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800">
            <Image src={design} width={100} height={100} alt="portfolio"/>
            <h3 className="text-lg font-medium pt-8 pb-2">User Interface Design</h3>
            <p>Prioritizing the users visual experience</p>
            <h4 className="text-teal-500"> Design tools I use</h4>
            <p className="text-gray-800 py-1 dark:text-white">FIgma</p>
            <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
            <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
          </div>
          

          
          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800" >
            <Image src={consulting} width={100} height={100} alt="portfolio"/>
            <h3 className="text-lg font-medium pt-8 pb-2">Digital Content Development</h3>
            <p>Creating elegent designs suited for your needs design theory</p>
            <h4 className="text-teal-500"> Design tools I use</h4>
            <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
            <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
            <p className="text-gray-800 py-1 dark:text-white">FIgma</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
          Tanjeem is a web developer who focuses on creating engaging website designs with responsive UI. Tanjeems ability to integrate color and visuals effectively into his portfolio shows his creativity as a designer.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image src={web1} className="rounded-lg object-cover" width={'100%'}  height={'100%'} layout="responsive" alt="portfolio"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web2} className="rounded-lg object-cover" width={'100%'}  height={'100%'} layout="responsive" alt="portfolio"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web3} className="rounded-lg object-cover" width={'100%'}  height={'100%'} layout="responsive" alt="portfolio"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web4} className="rounded-lg object-cover" width={'100%'}  height={'100%'} layout="responsive" alt="portfolio"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web5} className="rounded-lg object-cover" width={'100%'}  height={'100%'} layout="responsive" alt="portfolio"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web6} className="rounded-lg object-cover" width={'100%'}  height={'100%'} layout="responsive" alt="portfolio"/>
          </div>
        </div>
      </section>
      </main>

    </div>
  )
}
 
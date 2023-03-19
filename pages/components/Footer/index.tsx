import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosCode } from 'react-icons/io';
import { BiCodeAlt } from 'react-icons/bi';
import logoImg from '../../../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className='py-10 px-6'>
      <div className='flex justify-center items-center'>
        <div className='max-w-6xl flex justify-between w-full'>  
        <div>
          <Image
            alt="Logo brand Dom fit Suplem - Suplementos Alimentar"
            src={logoImg}
            priority
            width={180}
            height={180}
            className="rounded-md"
          />
        </div>
        <div className='flex flex-col justify-between ml-3 sm:m-0'>
          <h1 className='text-white text-2xl pb-1 sm:pb-2'>
            Contato
          </h1>
          <Link 
            href="https://www.instagram.com/domfitsuplem/" target="_blank"
            className='flex items-center pb-2 group hover:scale-110 hover:transition-transform'
          >
            <FaInstagram size={30} color="#ffffff" />
            <p className='text-gray-300 text-sm font-sans pl-2 
              hover:underline-offset-2 hover:underline'
            >
              Instagram
            </p> 
          </Link>
          <Link 
            href="https://www.facebook.com/people/Dom-Fit-Suplem/100088232860527/"
            target="_blank"
            className='flex items-center pb-2 group hover:scale-110 hover:transition-transform'
          >
            <FaFacebook size={30} color="#ffffff" />
            <p className='text-gray-300 text-sm font-sans pl-2
              hover:underline-offset-2 hover:underline'
            >
              Facebook
            </p>
          </Link>
          <Link 
            href="mailto:domfitsuplem@hotmail.com" 
            className='flex items-center group hover:scale-110 hover:transition-transform'
          >
            <AiOutlineMail size={30} color="#ffffff" />
            <p className='text-gray-300 text-sm font-sans pl-2
              hover:underline-offset-2 hover:underline'
            >
              domfitsuplem@hotmail.com
            </p>
          </Link>
        </div>
      </div> 
      </div>
      <div className='flex justify-center pt-12'>
        <p className='text-base text-white text-center'>
          Copyright DOM FIT SUPLEM - 37119006000192 - 2023. Todos os direitos reservados.
        </p>
      </div>
      <div className='flex flex-row justify-center items-center pt-3'>
        <p className='text-gray-400 text-center text-sm px-1'>
          Desenvolvido por
        </p>
        <IoIosCode className='h-4 w-4 tex text-gray-200'/>
        <Link href="http://www.linkedin.com/in/regis-de-oliveira-cardoso" target="_blank">
          <p className='text-gray-500 text-center text-sm px-1
            hover:underline-offset-2 hover:underline'
          >
            Régis
          </p>
        </Link>
        <BiCodeAlt className='h-4 w-4 tex text-gray-200'/>
      </div>
    </footer>
  )
}
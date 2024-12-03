import { React, useState } from 'react'
import Hamburgermenu from './menu/menu';
import { Button, Input } from '@material-tailwind/react';
import { Menu, MapPinHouse, Search, ShoppingBag } from 'lucide-react';


const navbar = () => {

  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>

      <nav className='sticky top-0 z-50 flex w-full items-center border-b bg-white p-4 md:px-6'>
        <div className="flex w-full items-center justify-around gap-x-4 lg:gap-x-6">
          {/* left sections */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-x-2 lg:gap-x-3">
              <Hamburgermenu />
              {/* <Button variant="text" className='p-2' size="icon" onClick={openDrawer}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button> */}


              <a href="/" className="hidden lg:flex">
                <img src='https://www.ubereats.com/_static/97c43f8974e6c876.svg' className='w-[90px] h-[16px]' />
              </a>

              <Button variant="text" className="hidden font-medium items-center text- gap-2 lg:flex text-black">
                <MapPinHouse className="h-4 w-4 text-black" />
                <span className=''>Nepal</span>
                <span className="h-4 w-[1px] bg-gray-300" />
                <span>Now</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </div>
          {/* center sections */}
          <div className="flex flex-1 items-center gap-x-4 lg:max-w-2xl">
            <div className="relative flex-1">            
              <Input
                size="lg"
                label="Search Uber Eats"
              />
            </div>
          </div>
          {/* right sections */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <Button variant="text" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5 text-black" />

              <span className="sr-only">Shopping cart</span>
            </Button>
            <div className="hidden lg:flex lg:items-center lg:gap-x-2">
              <Button variant="ghost" className='py-[10px] px-[20px] bg-black text-white'>Log in</Button>
              <Button variant="text" className='py-[10px] px-[20px] text-black bg-[#f3f3f1] '>Sign up</Button>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default navbar
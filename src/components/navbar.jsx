import { React, useState } from 'react'
import Hamburgermenu from './menu/menu';
import { useNavigate } from 'react-router';
import { Button, Input, Rating } from '@material-tailwind/react';
import {
  Dialog,
  Card,
  CardBody,
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { Home, Menu, MapPinHouse, DiamondPlus, CircleUser, ChartColumnStacked, Search, ShoppingBag, Trash2 } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const navbar = () => {


  const [uservalue, setUservalue] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

  console.log(uservalue);

  const [open, setOpen] = useState(false);

  // use state hook for drawer (menu hamburger navigation)


  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  // use state hook for dialog box of profile page 

  const [dopen, setdopen] = useState(false);
  const handleOpen = () => setdopen((cur) => !cur);

  // redirecting users when he clicks on nav section 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission or unwanted behavior
      if (uservalue.trim()) {
        navigate(`/search?query=${encodeURIComponent(uservalue)}`); // Redirect to search page with the query
      }
    }
  };




  

  // get carts 
  const storedCart = JSON.parse(localStorage.getItem("cart"));

  if (storedCart == null) {
    console.log("cart ma kai product xaina");
  }
  else {
    console.log(storedCart);

  }



  const Shoppingcard = () => {



    return (
      <>
        {storedCart == null ? (
          <p>You haven't added any products to the cart yet!</p>
        ) : (

          <div className='h-[390px] lg:h-[480px] overflow-y-scroll'>
            {storedCart.map((item, index) => (
              <ListItem key={index}>
                <div>
                  <div className='flex gap-6 w-full flex-wrap lg:[400px] items-center p-1 rounded-lg'>
                    <img src={item.img} className='w-[120px] rounded-xl' />
                    <div className='flex flex-1 flex-col gap-2'>
                      <h1 className='text-xl break-all'>{item.name}</h1>
                      <p className='font-bold'>${item.price}</p>
                      <div className='flex gap-4 mt-2 items-center'>
                        <Rating value={4} />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </ListItem>
              
            ))}

          </div>

        )}
      </>
    )
  }


  return (
    <>

      <nav className='sticky top-0 z-50 flex w-full items-center border-b bg-white p-4 md:px-6'>
        <div className="flex w-full items-center justify-around gap-x-4 lg:gap-x-6">
          {/* left sections */}
          <div className="flex items-center">
            <div className="flex items-center gap-x-2 lg:gap-x-1">
              <Hamburgermenu />



              <a href="/" className="hidden lg:flex">
                <img src='https://www.ubereats.com/_static/97c43f8974e6c876.svg' className='w-[90px] h-[16px]' />
              </a>

              <Button variant="text" className="hidden font-medium items-center gap-2 lg:flex text-black">
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
          <div className="flex flex-1 items-center lg:max-w-3xl">
            <div className="flex-1">
              <Input
                size="lg"
                label="Search Uber Eats"
                value={uservalue}
                onChange={(e) => setUservalue(e.target.value)} // Update query state on typing
                onKeyDown={handleKeyDown} // Listen for the Enter key
                placeholder="Search for products..."
              />
            </div>
          </div>
          {/* right sections */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <Popover>
              <PopoverHandler>
                <Button variant="text" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5 text-black" />
                  <span className="sr-only">Shopping cart</span>
                </Button>
              </PopoverHandler>
              <PopoverContent className='mt-4'>
                <List>

                  <Shoppingcard />

                </List>
              </PopoverContent>
            </Popover>
            <div className="hidden lg:flex lg:items-center lg:gap-x-2">
              <Button variant="ghost" className='py-[10px] px-[20px] bg-black text-white'>Log in</Button>
              <Button variant="text" className='py-[10px] px-[20px] text-black bg-[#f3f3f1] '>Sign up</Button>
            </div>

          </div>
        </div>
      </nav>

      {/* bottom nav  */}

      <nav className='fixed w-full bottom-0 z-50 bg-white'>
        <div className='lg:hidden flex flex-wrap justify-between  gap-5 p-3 border-2'>
          <span className='cursor-pointer'>
            <a href='/'><Home className='w-6 h-6' /></a>
          </span>
          <span className='cursor-pointer'>
            <Search className='w-6 h-6' />
          </span>
          <span className='cursor-pointer'>
            <DiamondPlus className='w-7 h-7' />
          </span>
          <span className='cursor-pointer'>
            <ChartColumnStacked className='w-6 h-6' />
          </span>
          <span className='cursor-pointer' onClick={handleOpen}>
            <CircleUser className='w-6 h-6' />
          </span>
          <Dialog
            size="xs"
            open={dopen}
            handler={handleOpen}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-full max-w-[24rem]">
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  Sign In
                </Typography>
                <Typography
                  className="mb-3 font-normal"
                  variant="paragraph"
                  color="gray"
                >
                  Enter your email and password to Sign In.
                </Typography>
                <Typography className="-mb-2" variant="h6">
                  Your Email
                </Typography>
                <Input label="Email" size="lg" />
                <Typography className="-mb-2" variant="h6">
                  Your Password
                </Typography>
                <Input label="Password" size="lg" />
                <div className="-ml-2.5 -mt-3">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" onClick={handleOpen} fullWidth>
                  Sign In
                </Button>
                <Typography variant="small" className="mt-4 flex justify-center">
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={handleOpen}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
          </Dialog>
        </div>
      </nav>

    </>
  )
}

export default navbar
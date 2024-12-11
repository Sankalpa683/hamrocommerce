import { useState, useEffect } from 'react';
import { Input, Button, Chip } from '@material-tailwind/react'
import { Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const hero = () => {

  // taking user to the search page

  const navigation = useNavigate();
  const [searchvalue, setSearchvalue] = useState('');


  const handleSearch = (e) => {
    setSearchvalue(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault(); // Prevent form submission or unwanted behavior

      if (searchvalue.trim()) {
        navigation(`/search?query=${encodeURIComponent(searchvalue)}`); // Redirect to search page with the query
      }
    }
  }


  return (
    <>
      <section id='hero_section'>
        <div className='py-[30px] lg:pt-[115px] lg:pb-[70px] px-[40px] w-full flex flex-wrap justify-center items-center flex-col'>
          <div className='text-center flex flex-col flex-wrap gap-5' id='main_header'>
            <h1 className='text-[31px] sm:text-[32px] md:text-[50px] lg:text-6xl text-center tracking-wide'>Discover the modern way<br className='hidden lg:block' /> to shop grocery.</h1>
            <h2 className='text-sm lg:text-lg text-center'>Explore exceptional products crafted by the most talented developers <br className='hidden lg:block' /> ready to elevate your shopping experience.</h2>
          </div>
          <div className="w-full max-w-2xl mt-8 space-y-4">
            <div className="flex gap-2">
              <div className="w-full max-w-2xl mt-8 space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchvalue}
                      onChange={handleSearch}
                      onKeyDown={handleKeyDown}
                      placeholder="What item are you looking for?"
                      className="w-full bg-white text-black border outline-none rounded-lg pl-4 pr-10 py-2 h-12"
                    />
                    <button
                      size="icon"
                      variant="ghost"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    >
                      <Search className="h-5 w-5 text-muted-foreground" />
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full max-w-2xl mt-8 space-y-4'>
            <div className='flex flex-wrap gap-3 items-center text-[14px]'>
              <p className='text-[#a8abb2] w-full text-center lg:text-start'>Trending searches: </p>
              <div className='flex flex-wrap cursor-pointer justify-center items-center lg:flex-nowrap gap-3'>
                <Chip variant="ghost" value="Breakfast" />
                <Chip variant="ghost" value="Coffee" />
                <Chip variant="ghost" value="Pizza" />
                <Chip variant="ghost" value="Chinese" />
                <Chip variant="ghost" value="Burgers" />
                <Chip variant="ghost" value="Dessert" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default hero
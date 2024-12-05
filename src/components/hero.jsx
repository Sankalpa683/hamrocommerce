import { useState, useEffect } from 'react';
import { Input, Button, Chip } from '@material-tailwind/react'
import { Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
const suggestions = [
  "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "Mens Casual Premium Slim Fit T-Shirts",
  "Mens Cotton Jacket",
  "Mens Casual Slim Fit",
  "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  "Solid Gold Petite Micropave",
  "White Gold Plated Princess",
  "Pierced Owl Rose Gold Plated Stainless Steel Double",
  "WD 2TB Elements Portable External Hard Drive - USB 3.0",
  "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
  "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  "MBJ Women's Solid Short Sleeve Boat Neck V"
];


const hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim()) {
      setFilteredSuggestions(
        suggestions.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };
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
                      value={inputValue}
                      onChange={handleInputChange}
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
                    {showSuggestions && filteredSuggestions.length > 0 && (
                      <ul className="absolute z-10 left-0 w-full bg-white border rounded-lg shadow-md mt-1">
                        {filteredSuggestions.map((item, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                            onClick={() => handleSuggestionClick(item)}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
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
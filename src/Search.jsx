import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from './components/navbar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Spinner } from "@material-tailwind/react";
import { Star } from 'lucide-react';
import { Button } from '@material-tailwind/react';
import Footer from './components/footer';

function SearchPage() {
  const location = useLocation(); // current URL thaha pauna
  const searchQuery = new URLSearchParams(location.search).get('query');


  function Searchsection({ value }) {

    // calling the fetchdata function to further pass it on query function of use query tanstack router

    const fetchdata = () => {
      return axios.get(`https://fakestoreapi.com/products`);
    };

    const { data, isLoading, isError, error } = useQuery({
      queryKey: ['products'],
      queryFn: fetchdata,
      keepPreviousData: true,
    });


    


    if (isLoading) {
      return (
        <>
          <section>
            <Navbar />
            <div className='mt-[60px] mb-[10px] w-full flex flex-col items-center justify-center'>
              <Spinner className='w-10 h-10 text-center' />
            </div>
          </section>
        </>
      );
    }

    if (isError) {
      return <div>The application encountered an error: {error}</div>;
    }

    // Filtering the product based on what user typed
    const filteredProducts = data.data.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    return (
      <>
        <main>
          <Navbar />
          <div className='max-w-7xl py-5 px-2 w-full mx-auto'>
            <div className='flex w-full text-center justify-center items-center flex-col gap-2'>
              <span className='font-medium text-xl lg:text-2xl capitalize'>
                Search Results for "<span className='font-bold'>{value}</span>"
              </span>
            </div>
            <br className='block lg:hidden' />
            <hr className='block lg:hidden' />
            <div className='py-5'>
              {filteredProducts.length > 0 ? (
                <div className='gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center lg:justify-between'>
                  {filteredProducts.map((item) => (
                    <div key={item.id} className="space-y-5 shadow h-fit rounded-lg">
                      <div className='w-full rounded-lg bg-[#f5f7f6] pt-3'>
                        <img className='object-cover w-[300px] h-[180px]' src={item.image} alt={item.title} />
                      </div>
                      <div className='mx-2'>
                        <div className='w-full text-lg flex justify-between items-center'>
                          <h1 className='font-medium'>{item.title}</h1>
                          <p className='font-bold'>${item.price.toFixed(2)}</p>
                        </div>
                        <div className='flex flex-wrap mt-4 gap-1 items-center'>
                          <Star className='w-4 text-yellow-700' />
                          <Star className='w-4 text-yellow-700' />
                          <Star className='w-4 text-yellow-700' />
                          <Star className='w-4 text-yellow-700' />
                          <Star className='w-4 text-yellow-700' />
                          <span className='font-medium text-[13px] ml-1'>(5 stars)</span>
                        </div>
                        <div className='my-6 w-full items-end'>
                          <Button variant="text" className='bg-gray-900/10 w-full'>Add to cart</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">No products found for "{value}".</p>
              )}
            </div>
          </div>
        </main>
        <br />
      </>
    );
  }

  return (
    <div>
      {searchQuery ? (
        <Searchsection value={searchQuery} />
      ) : (
        <div>
          <Navbar />
          <br />
          <p className="text-center mt-10">No search query provided.</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default SearchPage;

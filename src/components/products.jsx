import React from 'react'
import Select from 'react-select'
import { ChevronDown, Star } from 'lucide-react'
import { Button } from '@material-tailwind/react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";

const designs = [
    {
        id: 1,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 2,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 3,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 4,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 1,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 2,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 3,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 4,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
]

const options = [
    { value: 'Popular', label: 'Popular' },
    { value: 'Relavant', label: 'Relavant' },
]

const filters = [
    { value: 'Filters', label: 'Filters' },
]

const products = () => {
    return (
        <>
            <section className='pt-[30px] mx-3 lg:mx-0'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='flex-initial w-[150px]'>
                        <Select options={options} className='' defaultValue={options[0]} />
                    </div>

                    <div className=''>
                        <Button variant="text" className='flex gap-1 font-medium border border-[#efeeee] py-1 px-4 rounded-full items-center'>Sort by <ChevronDown className='w-4' /></Button>
                    </div>
                </div>
                <div className='py-10'>
                    
                    <div className='gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center lg:justify-between'>
                        {designs.map((item) =>
                            <>
                                <div className="space-y-5 rounded-lg">
                                    <div className='w-full rounded-lg bg-[#f5f7f6] pt-3'>
                                        <img className='object-cover w-[300px] h-[180px]' src='https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_6651523.png' />
                                    </div>
                                    <div className='mx-2'>
                                        <div className='w-full text-lg flex justify-between items-center'>
                                            <h1 className='font-medium'>{item.name}</h1>
                                            <p className='font-bold'>
                                                ${item.price}.00
                                            </p>
                                        </div>
                                        <div className='py-3 w-full'>
                                            <p className='text-[14px] capitalize text-gray-600'>{item.desc}</p>
                                        </div>
                                        <div className='flex flex-wrap gap-1 items-center'>
                                            <Star className='w-4 text-yellow-700' />
                                            <Star className='w-4 text-yellow-700' />
                                            <Star className='w-4 text-yellow-700' />
                                            <Star className='w-4 text-yellow-700' />
                                            <Star className='w-4 text-yellow-700' />
                                            <span className='font-medium text-[13px] ml-1'>(5 stars)</span>
                                        </div>
                                        <div className='my-6 w-full'>
                                            <Button variant="text" className='bg-gray-900/10 w-full'>Add to cart</Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                       

                    </div>
                </div>
            </section>
        </>
    )
}

export default products
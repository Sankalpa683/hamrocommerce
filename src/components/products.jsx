import { useState } from 'react'
import Select from 'react-select'
import { ChevronDown, Star, Plus } from 'lucide-react'
import { Button } from '@material-tailwind/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Spinner } from "@material-tailwind/react";


// const fetchProducts = async () => {
//     const data = await axios.get('https://fakestoreapi.com/products');
//     return data;
// };
// fetchProducts();

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
        id: 5,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 6,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 7,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
    {
        id: 8,
        name: 'Magaritto Pizza',
        price: '239',
        desc: "Always the party can't start without pizza.",
    },
]

const options = [
    { value: 'Popular', label: 'Popular' },
    { value: 'Relavant', label: 'Relavant' },
]

const products = () => {

    const fetchdata = (dyanamicvalue) => {
        return axios.get(`https://fakestoreapi.com/products?limit=${dyanamicvalue}`)
    }

    const [currentvalue, setCurrentvalue] = useState(4);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchdata(currentvalue),
        keepPreviousData : true,
    })

    const handleShowMoreClick = () => {
        setCurrentvalue(currentvalue == currentvalue + 4); // Increment by 2 when the button is clicked
    };


    if (isLoading) {
        return <div className='mt-[60px] mb-[10px] w-full flex flex-col items-center justify-center'>
            <Spinner className='w-10 h-10 text-center' />
        </div>
    }
    if (isError) {
        return <div>The have encounted with {error}.</div>

    }
    console.log(data);


    return (
        <>
            <section className='pt-[30px] mx-3 lg:mx-0'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='flex-initial w-[150px]'>
                        <Select options={options} defaultValue={options[0]} />
                    </div>

                    <div className=''>
                        <Button variant="text" className='flex gap-1 font-medium border border-[#efeeee] py-1 px-4 rounded-full items-center'>Sort by <ChevronDown className='w-4' /></Button>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center lg:justify-between'>
                        {data?.data.map((item) =>
                            <>
                                <div key={item} className="space-y-5 shadow h-fit rounded-lg">
                                    <div className='w-full rounded-lg bg-[#f5f7f6] pt-3'>
                                        <img className='object-cover w-[300px] h-[180px]' src={item.image} />
                                    </div>
                                    <div className='mx-2'>
                                        <div className='w-full text-lg flex justify-between items-center'>
                                            <h1 className='font-medium'>{item.title}</h1>
                                            <p className='font-bold'>
                                                ${item.price}.00
                                            </p>
                                        </div>
                                        <div className='py-3 hidden w-full'>
                                            <p className='text-[14px] capitalize text-gray-600'>{item.description}</p>
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


                            </>
                        )}

                    </div>
                    <div className='flex mt-6 w-full justify-center items-center'>
                        <Button className='flex gap-2 items-center' disabled={isLoading} onClick={handleShowMoreClick}> <Plus /> Show More</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default products
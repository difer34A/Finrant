import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex space-between drop-shadow-sm px-6 md:px-10 lg:px-15 xl:px-18 2xl:px-20 py-4 bg-sugarmilk space-x-8 place-items-center' >

            <div className='flex grow place-items-center'>
                <Link href={`/`} className='flex place-items-center space-x-4'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3183/3183463.png" alt="logo" className='h-14 w-14 drop-shadow-lg'/>
                    <h1 className='font-bold text-2xl text-softblack'>Finrant</h1>
                </Link>
                
            </div>

            <div className='grid place-items-center rounded-full bg-soft-black-100 w-10 aspect-square md:hidden'>
                <img className='grid w-6 aspect-square' src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="menu bar" />
            </div>

            <div className='hidden md:flex space-x-8 text-xl place-items-center overflow-x-auto pl-16 sm:pl-8'>
                <Link href={`/`} className='underline md:text-md'>
                    Home
                </Link>
                <Link href={`/api/restaurants`} className='underline'>
                    Restaurants
                </Link>
                <Link href={`/about`} className='underline'>
                    About
                </Link>
            </div>

        </div>
    )
}
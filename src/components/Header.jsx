import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
            <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                {/* mx-auto py-4 px-6 md:px-20 lg:px-32 text-white */}
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore Homes that fit your dreams</h2>
                {/* <div>
                    <a href='#'>Projects</a>
                    <a href='#'>Contact us</a>
                </div> */}

                <div class="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
                    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face" />
                    <div class="text-center space-y-2 sm:text-left">
                        <div class="space-y-0.5">
                            <p class="text-lg text-black font-semibo ld">
                                Erin Lindfords
                            </p>
                            <p class="text-slate-500 font-medium">
                                Product Engineers
                            </p>
                        </div>
                        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                    </div>
                </div>  
                             
            </div>
        </div>
    )
}

export default Header
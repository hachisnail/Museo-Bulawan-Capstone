import React from 'react'
import LandingNavbar from '../../components/navbar/landingNavbar'

const support = () => {
  return (
    <>
       <div className='w-screen h-full'>
            <LandingNavbar/>
            
            <div className='w-full h-auto px-20 my-11 pb-0.5'>
                <div className='flex flex-col justify-start items-center px-12'>
                    <div className='w-full h-40 flex gap-4'>

                        <div className='w-1/2'>
                            <div className="w-auto h-auto  flex items-start gap-2">
                            <i className="fas fa-clock text-xl relative mt-1.5 mr-2 w-5"></i>
                            <div>
                                <span className="block text-xl font-bold">Museum Hours</span>
                                <span className="text-md font-normal leading-tight">Open Daily 9:00am-5:00pm, Monday-Friday,</span>
                            </div>
                            </div>
                            <div className="w-auto h-auto flex items-start gap-2">
                            <i className="fa-solid fa-location-dot text-xl relative mt-1 mr-2 w-5"></i>
                            <div>
                                <span className="block text-xl font-bold">Museum Location</span>
                                <span className="text-md font-normal leading-tight">Camarines Norte Provincial Capitol Grounds, Daet Philippines</span>
                            </div>
                            </div>
                        </div>

                        <div className='w-1/2 text-justify tracking-wider text-xl font-[HinaMincho] px-12'>
                             <span className="text-2xl">Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit. Laboriosam officia repellendus iusto vel earum reiciendis. Voluptatem consequuntur error facilis molestias totam in omnis fuga fugiat velit? Aspernatur a officiis quos?
                        </div>


                    </div>
                    <div className='w-full h-64 flex gap-4'>

                        <div className='w-1/2 text-justify tracking-wide text-xl font-[HinaMincho] px-12'>
                            By supporting Museo Bulawan, you are not only helping to preserve important artifacts and historical objects but also contributing to the education and empowerment of future generations. This museum is more than just a place to view exhibits; it is a space for the community to connect, learn, and take pride in their shared heritage.
                            We invite you to join us in this important endeavor. Your support can make a significant difference in ensuring that the identity of the Camnorteños continues to thrive, fostering a deeper sense of patriotism and pride in our community. Together, we can keep the spirit of Camarines Norte alive for generations to come.
                        </div>

                        <div className='w-1/2 px-24 h-full'>
                        <div className='w-full h-full bg-[#EAEADA] flex justify-start items-start font-[HinaMincho] py-8 flex-col gap-3 px-20 shadow-lg font-medium'>
                            <span className='text-4xl'>Hello, let’s get in touch.</span>
                            <span className='text-2xl pl-5'>Do you want to donate/lend your artifact?</span>
                            <button className='w-52 bg-white py-4 mt-4 flex justify-center items-center shadow-md hover:bg-gray-200 cursor-pointer outline outline-[#867055] self-center'>
                                <span className='text-2xl'>CONTRIBUTE</span>
                            </button>
                        </div>

                        </div>

                        
                    </div>
                </div>
            </div>
        
       </div>
    </>
  )
}

export default support

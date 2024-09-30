    import React from 'react';
import Img from "../Assets/plumbing-professional-doing-his-job.png"
import Timework from './timework';
const Ad = () => {
    return (
        <>
            <div className='w-full h-auto py-6  px-10 bg-[#E3E3E3] pt-10 flex flex-col justify-start items-start gap-8 sm:px-4 '>
                <button className='w-[160px] h-[45px] bg-[#81818133] rounded-[90px]  text-[#292AFF] font-bold '>Преимущества</button>
                <div className='w-full bg-[#777777] h-[1.4px] '/>
                <div className='w-full flex h-auto  justify-between items-center sm:items-start px-5 sm:px-2'>
                    <p className='text-[#292AFF] text-[28px] font-bold'>Удобство</p>
                    <p className='text-[20px] w-[590px] sm:w-[45%] text-[#3D3D3D]'>Вам не нужно искать оформлять или увольнять сотрудника - все хлопоты мы берем на себя</p>
                </div>
                <div className='w-full bg-[#777777] h-[1px] '/>
                <div className='w-full flex h-auto  justify-between items-center px-5 sm:px-2 sm:items-start sm:gap-1 '>
                    <p className='text-[#292AFF] text-[28px] font-bold'>Надежность</p>
                    <p className='text-[20px] w-[590px]  sm:w-[45%] text-[#3D3D3D]'>Вам не нужно искать оформлять или увольнять
сотрудника - все хлопоты мы берем на себя</p>
                </div>
                <div className='w-full bg-[#777777] h-[1px] '/>
                <div className='w-full flex h-auto  justify-between items-center px-5 sm:px-2 sm:items-start '>
                    <p className='text-[#292AFF] text-[28px] font-bold'>Качества</p>
                    <p className='text-[20px] w-[590px] sm:w-[45%] text-[#3D3D3D]'>Вам не нужно искать оформлять или увольнять сотрудника - все хлопоты мы берем на себя</p>
                </div>
                <div className='w-full bg-[#777777] h-[1px] '/>
                <div className='w-full flex h-auto  justify-between items-center px-5 sm:px-2 sm:items-start '>
                    <p className='text-[#292AFF] text-[28px] font-bold'>Скорость</p>
                    <p className='text-[20px] w-[590px] sm:w-[45%] text-[#3D3D3D]'>Вам не нужно искать оформлять или увольнять сотрудника - все хлопоты мы берем на себя</p>
                </div>
                <div className='w-full bg-[#777777] h-[1px] '/>
                <div className='w-full flex h-auto  justify-between items-center px-5 sm:px-2 sm:items-start '>
                    <p className='text-[#292AFF] text-[28px] font-bold'>Гарантии</p>
                    <p className='text-[20px] w-[590px] sm:w-[45%] text-[#3D3D3D]'>Вам не нужно искать оформлять или увольнять сотрудника - все хлопоты мы берем на себя</p>
                </div>
                <div className='w-full mt-10'>
                    <img src={Img} alt="" className='w-full sm:h-[200px]'/>
                </div>
            </div>
            <Timework/>
        </>
    );
}

export default Ad;

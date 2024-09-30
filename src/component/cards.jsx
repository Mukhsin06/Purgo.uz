import React from 'react';
import Img from "../Assets/IMG_5741.png"
import Img1 from "../Assets/Mask group.png"

import Ad from './ad';

const Cards = () => {
  return (
      <div>
        <div className='w-full h-[1600px] pb-10  bg-[#E3E3E3] sm:w-full sm:h-auto sm:pb-10'>
          <div className='w-[98%] h-full bg-white mx-auto rounded-[30px]  flex sm:px-12 flex-wrap justify-center items-start py-10 sm:py-5 gap-12 sm:gap-8 sm:flex-col '>
            <div className='w-[620px]   h-[333px] flex flex-col px-6 pt-10 sm:w-[360px] sm:ml-[-36px] sm:h-[420px] bg-[#292AFF] rounded-[15px]'>
              <p className='text-[30px] sm:w-[90%] lg:w-[500px] text-white' style={{lineHeight: "35.63px"}}>Наши сантехнические услуги – комплексные решения для вашего дома и бизнеса!</p>
              <img src={Img} alt=""  className='w-[170px] ml-80 mt-[-20px] sm:ml-10 sm:mt-5'/>
            </div>
            <div className='w-[285px] h-[328px] sm:w-full'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>

              <button className='w-[280px] mx-auto  h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px]  '>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px]  sm:mt-0'>
              <div className='w-full h-[280px] bg-[#292AFF] rounded-[20px]'>
                <p className='text-white p-4 text-[30px] ml-2'>20% скидка для постоянных клиенты!</p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px]  sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px]  sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px]  mt-[-100px] sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px]  sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px]  sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px]  sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px]  mt-[-100px] sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px]  sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px] mt-[-100px] sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>

            <div className='w-[285px] h-[328px]  mt-[-100px] sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
            <div className='w-[285px] h-[328px]  mt-[-100px] sm:mt-0'>
              <div className='w-full h-[280px] flex justify-start items-end px-4 pb-4' style={{backgroundImage: `url(${Img1})`}}>
                <p className='text-white ' style={{fontWeight: '600'}}>Установка сантехники <br /><span style={{fontWeight: "400"}}>от 150 000 сум</span></p>
              </div>
              <button className='w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1'>Заказать</button>
            </div>
          </div>
        </div>
        <Ad/>

      </div>
  );
}

export default Cards;
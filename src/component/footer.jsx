import React, { useState } from 'react';
import Telegram from "../Assets/telegram-2-32.ico";

const Footer = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = `Phone: ${phone}\nName: ${name}`;

        // Sending data to Telegram bot
        await fetch(`https://api.telegram.org/bot8120547298:AAGToIqS8x0-1eE8XyXQyUInGV8zKXnXaMo/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '-1002485403067',
                text: message,
            }),
        });

        // Show confirmation, clear form
        setIsSent(true);
        setPhone('');
        setName('');

        // Hide confirmation message after 3 seconds
        setTimeout(() => {
            setIsSent(false);
        }, 3000);
    };

    return (
        <div>
            <div className='w-full h-[640px] bg-[#E3E3E3] pb-10 sm:w-full sm:h-auto'>
                <div className='w-[95%] h-full bg-[#292AFF] rounded-[30px] mx-auto flex gap-5 sm:flex-col sm:w-[100%]'>
                    <div className='w-[50%] flex flex-col p-10 sm:w-full sm:p-0 sm:flex-col sm:mb-10'>
                        <div className='w-[590px] h-[209px] rounded-[30px] p-5 bg-[#F1F5FE] sm:mt-10 sm:py-10 sm:h-auto sm:flex sm:flex-col sm:w-[90%] sm:mx-auto sm:px-2 sm:p-0'>
                            <p className='w-[281px] text-[18px] font-bold'>Оставьте свой личный контакт, чтобы воспользоваться нашими услугами</p>
                            <br />
                            <br />
                            <form onSubmit={handleSubmit} className='flex gap-2 sm:flex-col'>
                                <input
                                    type="text"
                                    placeholder='+998'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className='w-[236px] h-[40px] px-2 py-4 rounded-[30px] border-[3px] border-black mr-2 sm:w-full'
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder='Ваше имя'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='w-[236px] h-[40px] px-2 py-4 rounded-[30px] border-[3px] border-black sm:w-full'
                                    required
                                />
                                <button type="submit" className='w-[40px] h-[40px] flex justify-center items-center bg-[#292AFF] rounded-full'>
                                    <img src={Telegram} alt="Send" className='w-[20px] h-[20px]' />
                                </button>
                            </form>
                            {isSent && <p className='text-green-500 mt-3'>Отправлено!</p>}
                        </div>

                        <div className='w-full h-full flex flex-wrap sm:px-10'>
                            <div className='flex flex-col mt-10 w-[50%] sm:w-full'>
                                <p className='text-white text-[24px]'>Время работы</p>
                                <p className='text-white text-[18px] '>ПН-ВС (безвыходных) <br /> 9:00 - 20:00</p>
                            </div>
                            <div className='flex flex-col mt-10 w-[50%]'>
                                <p className='text-white text-[24px]'>Колл-центер</p>
                                <a href="" className='text-[18px] text-white'>+99890 325 33 93</a>
                                <a href="" className='text-[18px] text-white'>purgo@gmail.com</a>
                            </div>
                            <div className='flex flex-col mt-10 w-[50%] sm:w-full'>
                                <p className='text-white text-[24px]'>Социалный сети</p>
                                <a href="" className='text-[18px] text-white'>Telegram</a>
                                <a href="" className='text-[18px] text-white'>Instagram</a>
                                <a href="https://t.me/Mukhsin_06" className='text-[18px] text-white'>Mukhsin +998953900004</a>
                            </div>
                            <div className='flex flex-col mt-10 w-[50%]'>
                                <p className='text-white text-[24px]'>Наш адрес</p>
                                <p className='text-[18px] text-white'>Ангрен Карабау</p>
                                <p className='text-[18px] text-white'>улица Абай 23-дом</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[50%] mt-10 sm:w-[90%] sm:mx-auto sm:mb-10'>
                        <iframe
                            src="https://www.google.com/maps/@41.2862135,69.1768904,9z?entry=ttu"
                            frameBorder="0"
                            width="600"
                            height="450"
                            className='rounded-[20px] sm:w-full'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

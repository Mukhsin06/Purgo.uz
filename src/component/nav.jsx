import React from "react";
import Logo from "../Assets/Vector (1).png";
import { Link } from "react-router-dom";
import Bg from "../Assets/man-installs-heating-system-house-checks-pipes-with-wrench.png";
import Arrow from "../Assets/Vector (2).png";
import Company from "./company";

const Nav = () => {
  return (
    <div>
      <div
        className="w-full pb-10 sm:w-full"
        style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover"}}
      >
        <div className="w-full h-[100px] flex justify-between">
          <div className="w-[50%] flex justify-center items-center gap-10 ml-[-80px] sm:m-0">
            <img src={Logo} alt="Logo" />
            <div className="flex gap-8 text-white sm:hidden">
              <Link to="/">Сервисы</Link>
              <Link to="/">Преимущества</Link>
              <Link to="/">Этап работы</Link>
            </div>
          </div>
          <div className="w-[50%] flex justify-end items-center pr-20 sm:pr-0 sm:w-full">
            <button className="w-[140px] h-[40px] bg-[#2728B4] rounded-[90px] text-white">
              Контакты
            </button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[50%] h-full pt-20 flex flex-col justify-start items-center sm:w-full sm:pt-10">
            <h1 className="text-white text-[60px] w-[736px] tracking-[3px] sm:tracking-[.1px] sm:w-full sm:text-[46px] sm:px-4 leading-[70px] ml-[90px]">
              Гарантированные и качественные сантехнические услуги
            </h1>
            <button
              className="w-[285px] h-[70px] flex justify-center mt-10 ml-[-360px] sm:ml-[-60px] items-center gap-4 bg-white rounded-[90px] text-[#2728B4]"
              style={{ fontWeight: "600" }}
            >
              Бесплатная консультация
              <div className="w-[50px] h-[50px] bg-[#2728B4] flex justify-center items-center rounded-[90px]">
                <img src={Arrow} alt="Arrow" />
              </div>
            </button>
            <p className="text-white  text-[24px] mt-20 ml-[-110px] w-[520px] tracking-[2px] leading-[34.34px] sm:ml-0 sm:w-full sm:px-4 sm:mt-10">
              Экспертные сантехнические решения: надежный ремонт и установка, обслуживание домов и предприятий
            </p>
          </div>
          <div className="w-[50%]"></div>
        </div>
      </div>
      <Company/>
    </div>
  );
};

export default Nav;

import React from 'react';
import { Ball_icon } from "../image/ball_icon"; 
import { Music } from '../image/music';

const Product: React.FC = () => {
  const products = [
    { title: "1984", genre: "SIYOSAT, FANTASTIKA" },
    { title: "Rich dad poor dad", genre: "SIYOSAT, FANTASTIKA" },
    { title: "Код 8", genre: "SIYOSAT, FANTASTIKA" },
    { title: "Даниел КИЗ", genre: "SIYOSAT, FANTASTIKA" },
    { title: "Бепарволикнинг", genre: "SIYOSAT, FANTASTIKA" }
  ];

  return (
    <div className='container w-[1200px] ml-auto mr-auto mt-[40px]'>
      {/* Birinchi qator mahsulotlar */}
      <div className='flex gap-10'>
        {products.map((item, index) => (
          <div className="w-[239px] h-[450px] relative" key={index}>
            <img
              src="placeholder.jpeg" 
              className="w-[239px] h-[336px] absolute left-[-1px] top-[-1px] rounded-[14px] object-cover"
              alt="Placeholder"
            />
            <div className="w-[142px] h-30">
              <p className="absolute left-0 top-[354px] text-xl font-bold text-left text-[#11142d]">
                {item.title}
              </p>
              <p className="absolute left-0 top-[390px] text-sm text-left text-[#3f51b5]">
                {item.genre}
              </p>
              <div className='absolute left-0 top-[410px] flex justify-between w-[142px]'>
                <Ball_icon /> 
                <Music/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ikkinchi qator mahsulotlar - Audiokitoblar */}
      <p className="text-[32px] font-semibold text-left pt-5 pb-10 text-[#242424]">Аудио китоблар</p>
      <div className='flex gap-20'>
        {products.map((item, index) => (
          <div className="w-[239px] h-[450px] relative" key={index}>
            <img
              src="placeholder.jpeg" 
              className="w-[239px] h-[336px] absolute left-[-1px] top-[-1px] rounded-[14px] object-cover"
              alt="Placeholder"
            />
            <div className="w-[142px] h-30">
              <p className="absolute left-0 top-[354px] text-xl font-bold text-left text-[#11142d]">
                {item.title}
              </p>
              <p className="absolute left-0 top-[390px] text-sm text-left text-[#3f51b5]">
                {item.genre}
              </p>
              <div className='absolute left-0 top-[410px] flex justify-between w-[142px]'>
                <Ball_icon /> 
                <Music/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;

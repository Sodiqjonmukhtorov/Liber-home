import React from "react";
import { GoogleplayIcon } from "@/app/_assets/googleplay-icon";
import { ApplestoreIcon } from "@/app/_assets/applestore-icon";
import { SocialsIcon } from "@/app/_assets/socials-icon";
import { UzcardIcon } from "@/app/_assets/uzcard-icon";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-indigo-600 mt-[93px] pt-[31px] pb-[63px] text-white">
        <div className="container mx-auto flex gap-[200px]">
          <ul className="space-y-4">
            <h4 className="text-lg font-bold cursor-pointer">Платформа хақида</h4>
            <li className="cursor-pointer hover:text-yellow-400">Liber ўзи нима?</li>
            <li className="cursor-pointer hover:text-yellow-400">Фойдаланиш шартлари</li>
            <li className="cursor-pointer hover:text-yellow-400">Ёрдам</li>
          </ul>
          <ul className="space-y-4 flex flex-col">
            <h4 className="text-lg font-bold cursor-pointer">Обуна хақида</h4>
            <li className="cursor-pointer hover:text-yellow-400">Обуна бўлиш</li>
            <li className="cursor-pointer hover:text-yellow-400">Қандай тўлаш</li>
          </ul>
          <ul className="space-y-4 flex flex-col">
            <h4 className="text-lg font-bold cursor-pointer">Китоблар</h4>
            <li className="cursor-pointer hover:text-yellow-400">Аудио китоблар</li>
            <li className="cursor-pointer hover:text-yellow-400">Электрон китоблар</li>
            <li className="cursor-pointer hover:text-yellow-400">Китоблар</li>
          </ul>
          <ul className="space-y-4 flex flex-col">
            <h4 className="text-lg font-bold cursor-pointer">Мобил илова</h4>
            <a className="cursor-pointer" href="https://play.google.com/store/apps?hl=ru">
              <GoogleplayIcon />
            </a>
            <a href="https://www.apple.com/app-store/">
              <ApplestoreIcon />
            </a>
          </ul>
        </div>
      </footer>

      <div className="bg-slate-800 pt-[12px] pb-[33px] text-white">
        <div className="container mx-auto flex gap-[200px]">
          <ul className="space-y-2">
            <p className="text-lg font-bold">Ижтимоий тармоқлар</p>
            <div className="flex gap-3 mt-2">
              <SocialsIcon />
              <SocialsIcon />
              <SocialsIcon />
              <SocialsIcon />
            </div>
          </ul>
          <ul className="space-y-2">
            <p className="text-lg font-bold">Боғланиш</p>
            <li className="flex gap-5">
              <a className="hover:underline" href="tel:+998902537753">+998 90 253 77 53</a>
              <a className="block hover:underline" href="mailto:support@liber.uz">support@liber.uz</a>
            </li>
          </ul>
          <ul className="space-y-2">
            <p className="text-lg font-bold">Биз қабул қиламиз</p>
            <div className="flex gap-3">
              <UzcardIcon />
              <UzcardIcon />
              <UzcardIcon />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

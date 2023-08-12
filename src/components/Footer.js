import React from 'react';
import Logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#141311] py-4 text-[#999999] mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">YELİZ TOPKAÇ</p>
            <p className="text-sm max-sm:hidden">Eti Mahallesi Strazburg Caddesi 40/3 Çankaya, Ankara</p>
            <p className="text-sm max-sm:hidden">0533 492 61 78</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="/hakkimizda" className="hover:text-gray-400 transition">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/hizmetlerimiz" className="hover:text-gray-400 transition">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="/iletisim" className="hover:text-gray-400 transition">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-2 border-gray-600" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Yeliz Topkaç Mali Müşavirlik.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

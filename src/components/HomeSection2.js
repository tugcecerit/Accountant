import React, { useEffect } from 'react';
import image1 from "../images/home.png"
import image2 from "../images/home-img.png"
import image3 from "../images/1.jpeg"
import image5 from "../images/3.avif"
import image6 from "../images/4.avif"
import image7 from "../images/6.avif"
import image8 from "../images/7.avif"
import image9 from "../images/top-view-desk-dark-concept-with-copy-space.jpg"
import AOS from 'aos';

const Card = ({ title, imageSrc, description }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="max-w-sm mx-auto bg-white rounded shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const CardsGrid = () => {
  const cardsData = [
    {
        title: 'Muhasebe Hizmetleri',
        imageSrc: image1,
        description: ' İşletmenizin ihtiyaçlarına uygun muhasebe çözümleri bulun.',
    },
    {
        title: 'Bordrolama Hizmetleri',
        imageSrc: image8,
        description: 'Bordro yönetimini kolaylaştırın, doğru ve zamanında ödemeler sağlayın.',
    },
    {
        title: 'Vergi Hizmetleri',
        imageSrc: image3,
        description: 'Uzman vergi hizmetleri ile vergi yükümlülüklerinizi azaltın.',
    },
    {
        title: 'SGK Teşvikleri',
        imageSrc: image5,
        description: 'İşletmenizin büyümesi için potansiyel SGK teşviklerini keşfedin.',
    },
    {
        title: 'Şirket Kurulumu',
        imageSrc: image9,
        description: 'İşletmenizi güvenle başlatın, şirket kuruluş uzmanlığımızdan yararlanın.',
    },
    {
        title: 'E-fatura',
        imageSrc: image2,
        description: 'Daha düzenli finansal işlemler için dijital fatura sistemine geçin.',
    },
    {
        title: 'Genç Girişimci Başvurusu',
        imageSrc: image7,
        description: 'Genç girişimcilerin başvuru süreçlerine sorunsuz destek alın.',
    },
    {
        title: 'Danışmanlık Hizmetleri',
        imageSrc: image6,
        description: 'Finansal başarı için uzman tavsiye ve rehberlikten faydalanın.',
    },
  ];

  return (
    <div className="container mx-auto py-8">
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-yellow-700">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default CardsGrid;

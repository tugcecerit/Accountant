import React from "react";
import Image from "../images/about1.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
<div data-aos="fade-down"
     data-aos-duration="3000" className="flex flex-col sm:flex-row justify-center items-center mx-auto max-w-7xl overflow-hidden p-10 pt-20">
            <div className="w-full sm:w-1/2 order-2 sm:order-1 p-12 text-justify italic leading-7">
                <h1 className="text-xl font-bold pb-5">Serbest Muhasebeci Mali Müşavir Yeliz Topkaç</h1>
                <p>SMMM Yeliz Topkaç, 2004 yılında Gaziantep Üniversitesi İktisadi ve İdari Bilimler Fakültesi İktisat bölümünden mezun oldu. 2006 yılında Dicle Üniversitesi Hukuk Fakültesi'nde bir yıl süresince özel öğrenci statüsünde eğitim alarak sertifikasını tamamladı. Ardından çeşitli mesleki kurslara ve panellere katılarak kendini sürekli geliştirmeyi amaçladı.</p>
                <p>2008 yılında Ankara Serbest Muhasebeci Mali Müşavirler Odası'na kaydolarak ruhsatını aldı ve çeşitli firmalara danışmanlık vermeye başladı. 2013 yılında kendi ofisini açarak muhasebe ve mali müşavirlik faaliyetlerine başladı ve halen farklı sektörlerde mali müşavirlik hizmeti sunmaktadır.</p>
                <p>
                <b>Vizyon:</b> Vizyonumuz, finansal danışmanlık alanında standartları sürekli yükselterek, katıldığımız her işte finansal büyümeyi ve başarıyı tetiklemeyi amaçlamaktadır. Uzmanlığımızın, sağlam finansal stratejilerin oluşturulmasında ve sürdürülebilir refahın sağlanmasında önemli bir rol oynadığı bir gelecek hayal ediyoruz.
                </p>
                <p>
                <b>Misyon:</b> Misyonumuz, firmalar için eşsiz finansal rehberlik ve destek sağlamaktır. Geniş bilgi birikimimiz, sürekli öğrenme yaklaşımımız ve yenilikçi yöntemlerimizle finansal süreçleri optimize etmeye, uyumluluğu sağlamaya ve ekonomik dayanıklılığı desteklemeye adanmışız. Her finansal yolculukta güvenilir bir ortak olmayı taahhüt ediyor, müşterilerimizin hedeflerini ve uzun vadeli amaçlarını gerçekleştirmeye katkı sağlamayı amaçlıyoruz.
                </p>
            </div>
            <div className="w-full sm:w-1/2 order-1 sm:order-2">
                <img src={Image} alt="About Yeliz Topkaç" />
            </div>
        </div>
    );
};

export default About;

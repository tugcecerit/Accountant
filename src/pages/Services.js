import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-down" data-aos-duration="3000" className="flex flex-col sm:flex-row justify-center items-center mx-auto max-w-7xl overflow-hidden p-10 pt-28">
        <ul className="leading-8 text-justify">
        <h1 className="text-4xl font-bold pb-8 text-yellow-700">Hizmetler</h1>
            <li><b className="text-yellow-800">Muhasebe Hizmetleri: </b> Muhasebe hizmetleri, işletmelerin mali kayıtlarını düzenleyip takip etmelerine yardımcı olan önemli bir süreçtir. Gelir ve giderlerin kaydedilmesi, finansal tabloların hazırlanması ve vergi uyumluluğunun sağlanması gibi faaliyetleri içerir.</li>
            <hr></hr>
            <li><b className="text-yellow-800">Bordrolama Hizmetleri: </b> Bordrolama hizmetleri, işletmelerin çalışanlarının maaşları, özlük dosyaları ve sosyal hakları gibi insan kaynaklarıyla ilgili konuların yönetilmesine yardımcı olur. Doğru ve zamanında maaş ödemeleri ile yasal düzenlemelere uyum sağlama bu hizmetin temel hedeflerindendir.</li>
            <hr></hr>
            <li><b className="text-yellow-800">Vergi Hizmetleri: </b> Vergi hizmetleri, işletmelerin vergi yükümlülüklerini doğru şekilde yerine getirmelerine yardımcı olur. Vergi beyannamelerinin hazırlanması, vergi optimizasyonu ve vergi denetimlerine hazırlık gibi konuları içerir.</li>
            <hr></hr>
            <li><b className="text-yellow-800">SGK Teşvikleri: </b> Sosyal Güvenlik Kurumu (SGK) teşvikleri, işverenlere çeşitli teşvikler sunarak işgücü istihdamını teşvik etmeyi amaçlar. İşverenlerin prim indirimleri, sigorta prim teşvikleri gibi avantajları içerir.</li>
            <hr></hr>
            <li><b className="text-yellow-800">Şirket Kurulumu: </b> Şirket kurulumu hizmetleri, yeni bir işletmenin yasal ve idari süreçlerini yönetmeyi içerir. Ticaret sicili kayıtları, vergi numarası alımı ve diğer yasal formaliteler bu sürecin bir parçasıdır.</li>
            <hr></hr>
            <li><b className="text-yellow-800">E-fatura: </b> Elektronik fatura uygulaması, işletmelerin kağıt faturaları elektronik ortamda düzenlemelerine ve göndermelerine imkan tanır. Bu hizmet hem çevre dostu hem de iş süreçlerini hızlandırıcı bir rol oynar.</li>
            <hr></hr>
            <li><b className="text-yellow-800">Genç Girişimci Başvurusu: </b> Genç girişimci başvurusu, genç girişimcilerin desteklenmesi amacıyla sunulan teşviklerin ve avantajların kullanımını içerir. Genç girişimcilerin iş kurma süreçlerine yardımcı olmayı amaçlar.</li>
            <hr></hr>
            <li><b className="text-yellow-800">Danışmanlık Hizmetleri: </b> Danışmanlık hizmetleri, işletmelere yönetim, strateji, finans, pazarlama gibi konularda profesyonel rehberlik sağlar. İşletmelerin daha etkili ve verimli bir şekilde faaliyet göstermelerine yardımcı olur.</li>
        </ul>
        </div>
    )
}

export default Services;
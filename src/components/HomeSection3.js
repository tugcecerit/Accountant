import React from "react";
import Gib from "../images/gib.png"
import Sgk from "../images/sgk.png"
import Edevlet from "../images/edevlet.png"
import Efatura from "../images/efatura.png"
import Maliye from "../images/maliye.png"
import Turmob from "../images/turmob.png"
import Tesmer from "../images/tesmer.png"
import Asmmmo from "../images/asmmmo.png"
import Iskur from "../images/iskur.png"
import Ato from "../images/ato.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Links = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
    <section>
        <h1 className="text-4xl font-bold p-10 text-yellow-700">Bağlantılar</h1>
        <div className="flex flex-wrap justify-center items-center pb-10">
        <a data-aos="flip-right"  className="flex justify-center items-center" href="http://www.gib.gov.tr/" target="_blank"><img src={Gib} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="https://www.sgk.gov.tr/" target="_blank"><img src={Sgk} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="https://www.turkiye.gov.tr/" target="_blank"><img src={Edevlet} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="http://www.efatura.gov.tr/anasayfa.html" target="_blank"><img src={Efatura} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="https://www.hmb.gov.tr/" target="_blank"><img src={Maliye} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="http://www.turmob.org.tr/TurmobWeb/" target="_blank"><img src={Turmob} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="https://www.tesmer.org.tr/" target="_blank"><img src={Tesmer} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="https://www.asmmmo.org.tr/" target="_blank"><img src={Asmmmo} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="https://www.iskur.gov.tr/" target="_blank"><img src={Iskur} className="w-50 sm:w-1/2"></img></a>
        <a data-aos="flip-right" className="flex justify-center items-center" href="https://www.atonet.org.tr/" target="_blank"><img src={Ato} className="w-50 sm:w-1/2"></img></a>
        </div>
        <h1 className="text-4xl font-bold p-10 text-yellow-700">Faydalı Linkler</h1>
        <div className="flex flex-wrap justify-center items-center pb-10">
        <a className="flex justify-center items-center px-10 py-2 w-70 m-2 font-bold border rounded-md shadow-md hover:bg-zinc-100" href="https://www.tcmb.gov.tr/kurlar/kurlar_tr.html" target="_blank">Merkez Bankası Kurları</a>
        <a className="flex justify-center items-center px-10 py-2 w-70 m-2 font-bold border rounded-md shadow-md hover:bg-zinc-100" href="https://www.iskur.gov.tr/isveren/tesvikler/" target="_blank">İŞKUR Teşvikleri</a>
        <a className="flex justify-center items-center px-10 py-2 w-70 m-2 font-bold border rounded-md shadow-md hover:bg-zinc-100" href="https://www.gib.gov.tr/yardim-ve-kaynaklar/vergi-takvimi" target="_blank">Vergi Takvimi</a>
        <a className="flex justify-center items-center px-10 py-2 w-70 m-2 font-bold border rounded-md shadow-md hover:bg-zinc-100" href="https://www.turmob.org.tr/Mevzuat" target="_blank">Mevzuat</a>
        <a className="flex justify-center items-center px-10 py-2 w-70 m-2 font-bold border rounded-md shadow-md hover:bg-zinc-100" href="https://www.turmob.org.tr/Mevzuat/PratikBilgiler" target="_blank">Pratik Bilgiler</a>
        </div>
    </section>
)}

export default Links;
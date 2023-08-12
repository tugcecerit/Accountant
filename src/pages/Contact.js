import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import emailjs from "emailjs-com"

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white pt-16">
            <div data-aos="zoom-in" data-aos-duration="3000" className="bg-white rounded w-3/4">
                <h2 className="text-4xl font-semibold mb-6 text-yellow-700">İletişim</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:flex-col">
                        <p><b className="text-yellow-800">ADRES:</b></p> 
                        <p>Eti Mahallesi Strazburg Caddesi 40/3</p>
                        <p>Çankaya, Ankara</p>
                    </div>
                    <div className="md:flex-col">
                        <p><b className="text-yellow-800">TELEFON & EMAIL:</b></p> 
                        <p><b>Tel-Whatsapp: </b>(0533) 492-6178</p>
                        <p><b>Email: </b>topkacyeliz@gmail.com</p>
                    </div>
                    <div className="md:flex-col">
                        <p><b className="text-yellow-800">ÇALIŞMA SAATLERİ:</b></p> 
                        <p><b>Hafta İçi: </b>09:00 - 18:00</p>
                        <p><b>Hafta Sonu: </b>Kapalı</p>
                        <br></br>
                    </div>
                </div>
                <hr />
                <br />
                <form>
                     <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">İsim</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="İsminiz"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Emailiniz"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesaj</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Mesajınız"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-700 text-white py-2 px-4 rounded hover:bg-yellow-800 focus:outline-none focus:ring focus:border-gray-500"
                    >
                        Gönder
                    </button>
                </form>
            <div/>
            </div>
        </div>
    );
};

export default Contact;

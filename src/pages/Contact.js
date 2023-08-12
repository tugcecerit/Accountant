import React, { useRef, useEffect } from "react";

const Contact = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const mapOptions = {
            center: { lat: 39.92740221853109, lng: 32.849458897116605 },
            zoom: 15,
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        const marker = new window.google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: "Your Location",
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <form>
                     <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div
                ref={mapRef}
                className="w-96 h-64 mt-8 rounded shadow-md"
                style={{ minHeight: "300px" }}
            />
        </div>
    );
};

export default Contact;

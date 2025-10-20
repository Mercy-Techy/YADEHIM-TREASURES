import React from "react";
import image from "./assets/demo.jpg";
import { motion } from "framer-motion";

export default function App() {
  const whatsappNumber = "2349035066385"; // Replace with real WhatsApp number

  const categories = [
    {
      name: "Bracelets",
      products: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ].map((i) => `/bracelets/${i}.jpg`),
    },
    {
      name: "Necklaces",
      products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (i) => `/necklace/${i}.jpg`
      ),
    },
    {
      name: "Wrist Watches",
      products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (i) => `/wristwatch/${i}.jpg`
      ),
    },
    {
      name: "Earrings",
      products: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((i) => `/earrings/${i}.jpg`),
    },
    {
      name: "Bags",
      products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (i) => `/bags/${i}.jpg`
      ),
    },
    {
      name: "Rings",
      products: [1, 2, 3, 4, 5, 6, 7, 8, 9, , 10, 11, 12, 13].map(
        (i) => `/rings/${i}.jpg`
      ),
    },
    {
      name: "Mens Jewellery",
      products: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        ,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
      ].map((i) => `/men/${i}.jpg`),
    },
  ];

  const openWhatsApp = (category) => {
    const message = `Hi! I'm interested in a product in your ${category} collection on YADEHIM TREASURES.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-gray-50 to-white shadow-sm">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-widest text-gray-900"
        >
          YADEHIM TREASURES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-600 text-lg"
        >
          YADEHIM TREASURES is your go-to Jewellery and Beauty Accessories
          wholesale platform and store, providing beautiful items at affordable
          prices for resale or personal use. These are only a few of the
          treasures we offer — there’s much more in store! Simply click on any
          image to start a WhatsApp chat with us.
        </motion.p>
      </section>

      {/* Product Categories */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {categories.map((category, idx) => (
          <motion.section
            key={category.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-900 border-b-2 border-gray-200 inline-block pb-2">
              {category.name}
            </h2>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {category.products.map((product, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
                  onClick={() => openWhatsApp(category.name)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product}
                      alt="image"
                      className="w-full h-72 object-cover group-hover:opacity-90 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                      <p className="text-white font-medium">
                        Click to inquire on WhatsApp
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-200 bg-gray-50">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-sm"
        >
          📞 Phone: +234 903 506 6385 | ✉️ Email: adewunmipatricia57@gmail.com
        </motion.p>
        <p className="text-gray-600 text-sm mt-2">
          📸 Telegram wholesale group:{" "}
          <a
            href="https://t.me/yadehimtreasureswholesalegroup"
            target="_blank"
            className="text-gray-900 font-semibold hover:underline"
          >
            yadehim treasures wholesalegroup
          </a>
        </p>
      </footer>
    </div>
  );
}

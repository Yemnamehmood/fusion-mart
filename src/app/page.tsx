'use client'
import React, { useState } from 'react';
import Image from 'next/image';




const products = [
  { id: 1, name: 'Elegant Handbag', price: 120, description: 'A stylish handbag made from premium leather, featuring a spacious interior, multiple pockets, and a detachable shoulder strap. Perfect for any occasion.', image: '/360_F_110045173_QgmA3gg5OwTlLNQBqmPdFnkh6sPvsvt8.jpg' },
  { id: 2, name: 'Casual Backpack', price: 80, description: 'A spacious and comfortable backpack...', image: '/61Rlx3Fkv8L._AC_UY1000_.jpg' },
  { id: 3, name: 'Modern Sunglasses', price: 50, description: 'Stylish sunglasses good for sunny days', image: '/annie-williams-FlP6C5pkMKs-unsplash.jpg' },
  { id: 4, name: 'Luxe Leather Wallet', price: 45, description: 'Compact and durable wallet, crafted with premium leather', image: '/01-500x500.jpg' },
  { id: 5, name: 'Crystal Bracelet', price: 60, description: 'A beautiful bracelet adorned with sparkling crystals. Perfect for special occasions', image: '/carlos-esteves-1MWbwTaeJIA-unsplash (1).jpg' },
  { id: 6, name: 'Silk Scarf', price: 40, description: 'An elegant silk scarf, perfect for elevating any outfit.', image: '/silk-square-scarves_842983-14579.jpg' },
  { id: 7, name: 'Running Sneakers', price: 85, description: 'Lightweight, comfortable, and stylish sneakers for running or casual wear', image: '/tanaphong-toochinda-WWDMEVcGPbU-unsplash.jpg' },
  { id: 8, name: 'Trendy Hat', price: 25, description: 'A fashionable hat for outdoor activities or casual wear.', image: '/a-straw-hat-with-a-navy-ribbon-resting-on-the-sandy-beach-photo.jpg' },
  { id: 9, name: 'Fashion Belt', price: 30, description: 'A stylish belt made from premium leather to complete your look.', image: '/82daf2744998effbd0e83162d02be613.jpg_720x720q80.jpg' },
  { id: 10, name: 'Designer Watch', price: 150, description: 'A luxury designer watch that adds a touch of elegance to any outfit.', image: '/dennis-mettler-F6cisZRic-A-unsplash.jpg' },
  { id: 11, name: 'Vintage Necklace', price: 95, description: 'A stunning vintage necklace that brings timeless beauty to your wardrobe', image: '/417604784_1308549186439373_4649440491831830391_n.jpg' },
  { id: 12, name: 'Classic Earrings', price: 35, description: 'A pair of classic earrings that never go out of style', image: '/original_75a0a7c1-0ce1-4e78-b5eb-ef7a19e69d4c_PXL_20220622_004318825.jpg' },
  { id: 13, name: 'Statement Ring', price: 70, description: 'A bold statement ring that enhances your personal style', image: '/cornelia-ng-zZLhoEwGCeM-unsplash.jpg' },
  { id: 14, name: 'Floral Dress', price: 110, description: 'A beautiful floral dress, perfect for spring and summer days', image: '/modest-dark-purple-chiffon-floral-dresses-50355kmor-daily-dresses-neva-style-92464-34-B.jpg' },
  { id: 15, name: 'Denim Jacket', price: 90, description: 'A stylish denim jacket that complements both casual and smart-casual outfits', image: '/13232473_MediumBlueDenim_003.jpg' },
  { id: 16, name: 'Leather Boots', price: 130, description: 'Premium quality leather boots, durable and fashionable', image: '/logan-weaver-lgnwvr-PdO0sdaLcdw-unsplash.jpg' },
  { id: 17, name: 'Cozy Sweater', price: 60, description: 'A warm and cozy sweater for chilly days', image: '/61+rAhCtgsL._AC_UY1000_.jpg' },
  { id: 18, name: 'Printed T-Shirt', price: 25, description: 'A trendy printed t-shirt with a unique design', image: '/Retro-Typography-t-shirt.jpg' },
  { id: 19, name: 'Slim Fit Jeans', price: 65, description: 'Stylish slim fit jeans that are both comfortable and chic.', image: '/BJ3157-D-BLUE-RS-4490-01.jpg' },
  { id: 20, name: 'Sports Cap', price: 20, description: 'A cool and comfortable sports cap for outdoor activities', image: '/de052e4619a677100646118cefcc077f.jpg_720x720q80.jpg' },
  { id: 21, name: 'Wireless Earbuds', price: 110, description: 'High-quality wireless earbuds with noise cancellation and superior sound', image: '/e6ef2d4ad37e34e9757c2f1763966339.jpg' },
  { id: 22, name: 'Smart Fitness Watch', price: 200, description: 'A smart fitness watch with heart rate tracking, GPS, and more.', image: '/czCHYTHqCeLKYGGaJ8tEXJ-480-80.jpg' },
  { id: 23, name: 'Crossbody Bag', price: 75, description: 'A chic and functional crossbody bag for everyday use', image: '/751280f08586693b6f52697c69e25e36.jpg' },
  { id: 24, name: 'Travel Suitcase', price: 150, description: 'A durable and lightweight suitcase, perfect for travel.', image: '/41Kr0oBR7AL._AC_.jpg' },
  { id: 25, name: 'Beach Sandals', price: 35, description: 'Comfortable beach sandals for sunny days by the water', image: '/colorful-sandals-with-starfish-beach_636537-341474.jpg' }

];



export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<null | { id: number, name: string, price: number, description: string, image: string }>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <h1 className="text-xl font-bold">Yemna&apos;s Fusion Mart</h1>
        <nav>
          <a href="#home" className="px-4 hover:text-gray-300">Home</a>
          <a href="#shop" className="px-4 hover:text-gray-300">Shop</a>
          <a href="#about" className="px-4 hover:text-gray-300">About</a>
          <a href="#contact" className="px-4 hover:text-gray-300">Contact Us</a>
        </nav>
      </header>

      {/* Home section with video background */}
      <section id="home" className="relative h-[50vh] overflow-hidden">
       {/* Video background */}
       <video
           autoPlay
            muted
            loop
            playsInline
           className="absolute inset-0 w-full h-full object-cover" // Video should fill the background
  >
           <source src="/coverr-secure-online-shopping-experience-1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

          {/* Overlay content */}
           <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black bg-opacity-50">
           <h2 className="text-3xl font-bold">Welcome to Yemna&apos;s  Fusion Mart</h2>
           <p className="mt-4 text-lg">Discover stylish fashion and accessories at unbeatable prices!</p>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="p-8 bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300">
          Yemna&apos;s  Fusion Mart is dedicated to bringing you high-quality fashion and accessories at affordable prices.
        </p>
      </section>

      {/* Shop Section */}
      <section id="shop" className="p-8 bg-gray-900">
        <h2 className="text-2xl font-bold mb-4">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className={`bg-gray-800 rounded-lg p-4 transition-transform transform ${
                hoveredProduct === product.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => setSelectedProduct(product)}
            >
              <Image src={product.image} alt={product.name} width={500} height={300}  className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-300">{product.description}</p>
              <p className="font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300">Name</label>
            <input type="text" id="name" className="w-full p-2 rounded bg-gray-700 border border-gray-600" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 rounded bg-gray-700 border border-gray-600" required></textarea>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-500 rounded">Send Message</button>
        </form>
      </section>

      {/* Selected Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <p>{selectedProduct.description}</p>
            <p className="font-bold mt-2">${selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)} className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded">Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center">
        <p className="text-gray-300">© 2024 Yemna&apos;s Fusion Mart. All rights reserved.</p>
      </footer>
    </div>
  );
}

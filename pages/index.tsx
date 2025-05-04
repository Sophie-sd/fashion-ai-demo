import React, { useRef } from 'react';
// Видаляємо невикористані імпорти Image, Geist, Geist_Mono
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import { PhotoIcon, SparklesIcon, EyeIcon } from '@heroicons/react/24/outline';

// Видаляємо невикористані визначення шрифтів
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// 
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const HomePage: React.FC = () => {
  // Ref для доступу до прихованого input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    // Клік по label викликає клік по input
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
      // Тут буде логіка обробки завантаженого файлу
    }
  };

  return (
    <>
      {/* Head елементи (title, meta, script) краще керувати через Next.js Head компонент
          або налаштування Tailwind у tailwind.config.js та postcss.config.js */}

      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-pink-600">Fashion AI</h1>
        <p className="text-center text-gray-600">Your Personal AI Stylist</p>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">

        {/* Секція 1: Завантаження фото */}
        <section
          id="upload-section"
          className="bg-white p-8 rounded-lg shadow-md text-center transition-opacity duration-500 ease-in opacity-100"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <PhotoIcon className="h-6 w-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-pink-600">1. Upload Your Photo</h2>
          </div>
          <p className="text-gray-600 mb-6">Show us your look, and we&apos;ll help you perfect it.</p>
          {/* Label з градієнтом */}
          <label
            htmlFor="file-upload"
            onClick={handleUploadClick}
            className="block rounded-lg p-12 transition duration-300 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90"
          >
            <p className="font-medium">Drag photo here or <span className="underline">click to select</span></p>
          </label>
          {/* Прихований input type="file" */}
          <input
            id="file-upload"
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
        </section>

        {/* Секція 2: AI Рекомендації */}
        <section
          id="recommendations-section"
          className="bg-white p-8 rounded-lg shadow-md transition-opacity duration-500 ease-in opacity-100"
        >
          <div className="flex justify-center items-center gap-2 mb-4 text-center">
            <SparklesIcon className="h-6 w-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-pink-600">2. Get AI Recommendations</h2>
          </div>
          <p className="text-gray-600 mb-6 text-center">Our AI will analyze your style and suggest the best options.</p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {/* Додано hover ефекти та transition */}
            <div className="border border-gray-200 rounded p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <p className="font-medium">👖 Slim-fit Jeans</p>
              <p className="text-sm text-gray-500">Perfect fit for your figure.</p>
            </div>
            <div className="border border-gray-200 rounded p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <p className="font-medium">🧣 Bright Scarf</p>
              <p className="text-sm text-gray-500">Add an accent to your look.</p>
            </div>
            <div className="border border-gray-200 rounded p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
               <p className="font-medium">👟 White Sneakers</p>
              <p className="text-sm text-gray-500">Versatile choice for casual style.</p>
            </div>
          </div>
        </section>

        {/* Секція 3: Віртуальна примірка */}
        <section
          id="try-on-section"
          className="bg-white p-8 rounded-lg shadow-md text-center transition-opacity duration-500 ease-in opacity-100"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <EyeIcon className="h-6 w-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-pink-600">3. Virtual Try-On (Coming Soon!)</h2>
          </div>
          <p className="text-gray-600">Try on recommended items online without leaving home.</p>
          <div className="mt-6 bg-gray-200 h-48 rounded flex items-center justify-center">
               <p className="text-gray-500 italic">Virtual try-on will be here...</p>
          </div>
        </section>

      </main>

      <footer className="text-center py-6 mt-12 border-t border-gray-200">
        <p className="text-gray-500">&copy; 2024 Fashion AI. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;

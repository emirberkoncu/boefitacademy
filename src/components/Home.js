import React from 'react';
import Slider from './Slider';

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to BOE Fit Academy</h1>
        <p className="text-lg mb-6">
          BOE Fit Academy, üyelerimizin hedefledikleri fiziğe ulaşmalarını
          sağlamak amacıyla bilimsel temelli yaklaşımlar sunan bir kuruluştur.
          Kişiye özel antrenman programları ve beslenme rehberliği ile her
          bireyin ihtiyaçlarına uygun, sürdürülebilir ve etkili sonuçlar elde
          etmelerine yardımcı oluyoruz. Motivasyon ve disiplinle, sağlık ve
          zindelik hedeflerinize ulaşmanız için yanınızdayız.
        </p>
        <a
          href="mailto:emirberkoncu@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold h-8 mt-[5px] py-1 px-4 rounded"
        >
          Contact Us
        </a>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <div className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">3 Ay Üyelik</h2>
              <ul className="list-disc ml-6">
                <li>3 ay boyunca sınırsız erişim</li>
                <li>Her ay yeni içerik güncellemeleri</li>
                <li>Özel destek hizmeti</li>
                <li>Kişiye Özel Beslenme</li>
                <li>Kişiye Özel Antrenman</li>
              </ul>
              <p className="text-lg font-bold mt-4">Fiyat: 99,99 TL</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <div className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">6 Ay Üyelik</h2>
              <ul className="list-disc ml-6">
                <li>6 ay boyunca sınırsız erişim</li>
                <li>Her ay yeni içerik güncellemeleri</li>
                <li>Özel destek hizmeti</li>
                <li>Ekstra içerik paketi</li>
                <li>Kişiye Özel Beslenme</li>
                <li>Kişiye Ozel Antrenman</li>
              </ul>
              <p className="text-lg font-bold mt-4">Fiyat: 199,99 TL</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <div className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">12 Ay Üyelik</h2>
              <ul className="list-disc ml-6">
                <li>12 ay boyunca sınırsız erişim</li>
                <li>Her ay yeni içerik güncellemeleri</li>
                <li>Özel destek hizmeti</li>
                <li>Ekstra içerik paketi</li>
                <li>Özel danışmanlık hizmeti</li>
                <li>Kişiye Özel Beslenme</li>
                <li>Kişiye Ozel Antrenman</li>
                <li>Kişiye Ozel Danışmanlık</li>
              </ul>
              <p className="text-lg font-bold mt-4">Fiyat: 399,99 TL</p>
            </div>
          </div>
        </div>
        <Slider />
      </div>
      <footer className="w-full bg-gray-800 text-white p-3 text-center fixed bottom-0">
        <p>
          © 2024 BOE Fit Academy. All rights reserved.{' '}
          <a
            href="https://github.com/emirberkoncu"
            className="text-blue-500 hover:text-blue-700"
          >
            Github
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;

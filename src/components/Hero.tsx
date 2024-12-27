import React from 'react';
import { branding } from '../config/branding';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Faixa Promocional */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-2">
            <span className="font-semibold">🎉 Oferta de Lançamento!</span>
            <span className="text-yellow-300 font-bold">Acesso Ilimitado por apenas R$ 34,90</span>
            <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">Tempo Limitado</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full text-center lg:text-left lg:max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {branding.tagline}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {branding.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://abrir.link/hMVqD" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors text-center group relative overflow-hidden"
              >
                <span className="relative z-10">Aproveite a Oferta</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <video 
                className="w-full h-auto"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/vídeo/Standard_Mode_Generated_Video (1).mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
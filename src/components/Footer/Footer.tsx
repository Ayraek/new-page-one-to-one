import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#d3d8d5] text-black py-12 px-6">
      {/* Call to action block */}
      <div className="absolute top-4 right-4 flex flex-col items-center justify-center w-20 h-20 border border-black bg-yellow-300">
        <span className="text-xl">↗</span>
        <span className="text-[10px] font-bold uppercase mt-1">LET’S TALK</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left title */}
          <div className="leading-tight font-bold text-3xl uppercase space-y-1">
            <p>ONE</p>
            <p>TO</p>
            <p>ONE</p>
          </div>

          {/* Right columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col space-y-1">
              <a href="#" className="hover:underline">Facebook ↗</a>
              <a href="#" className="hover:underline">Instagram ↗</a>
              <a href="#" className="hover:underline">Pinterest ↗</a>
            </div>
            <div className="flex flex-col space-y-1">
              <span>Bovenkamp 7</span>
              <span>1391 LA Abcoude</span>
            </div>
            <div className="flex flex-col space-y-1">
              <a href="mailto:hello@format.furniture" className="underline">hello@format.furniture</a>
              <span>0294 74 53 93</span>
            </div>
            <div className="flex flex-col space-y-1">
              <a href="#" className="underline">Contact</a>
              <a href="#" className="underline">Join us</a>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <h1 className="font-bold lowercase leading-none text-[8rem]">format</h1>
          <p className="text-right text-xs mt-2">© format 2024. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


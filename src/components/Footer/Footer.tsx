import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#d3d8d5] text-black py-10 px-6 font-sans">
      {/* Call to action block */}
      <div className="absolute top-0 right-0 flex items-center justify-center w-28 h-28 border border-black bg-yellow-300 text-center">
        <span className="text-sm font-bold">LET’S TALK ↗</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-5 gap-8">
          {/* Left title */}
          <div className="leading-none font-bold uppercase text-4xl md:text-5xl space-y-1">
            <p>ONE</p>
            <p>TO</p>
            <p>ONE</p>
          </div>

          {/* Right columns */}
          <div className="col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-x-6 text-sm mt-6 md:mt-0">
            <div className="flex flex-col space-y-1">
              <a href="#">Facebook ↗</a>
              <a href="#">Instagram ↗</a>
              <a href="#">Pinterest ↗</a>
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

        <div className="mt-16">
          <h1 className="text-[160px] font-black lowercase tracking-tight leading-none">format</h1>
          <p className="text-xs mt-2">© format 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


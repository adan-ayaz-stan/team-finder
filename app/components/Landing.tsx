import { Spotlight } from "./ui/Spotlight";

const Landing = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Navigation Bar */}
      <nav className="bg-black text-white fixed w-full flex items-center justify-between px-8 py-4 z-20 top-0 left-0">
        <div className="text-lg font-bold">Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Link One</a>
          <a href="#" className="hover:text-gray-300">Link Two</a>
          <a href="#" className="hover:text-gray-300">Link Three</a>
          <div className="relative group">
            <a href="#" className="hover:text-gray-300">Link Four ▾</a>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-black text-white mt-2 py-2 w-48">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Sub Link 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Sub Link 2</a>
            </div>
          </div>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">Login</button>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-20 overflow-hidden">
        {/**
         *  UI: Spotlights
         *  Link: https://ui.aceternity.com/components/spotlight
         */}
        <div className="relative">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-[50vw]"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/**
         *  UI: grid
         *  change bg color to bg-black-100 and reduce grid color from
         *  0.2 to 0.03
         */}
        <div
          className="h-screen w-full dark:bg-black bg-black dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
          absolute top-0 left-0 flex items-center justify-center overflow-hidden"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // change the bg to bg-black, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
            bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
              Hi! We&apos;re [ Project Name ], a SOLUTION to finding Hackathon teams
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
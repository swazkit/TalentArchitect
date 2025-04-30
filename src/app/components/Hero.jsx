'use client'
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white text-gray-900 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-blue-50 opacity-50 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZjBmOWZmIiBkPSJNMCAwaDEyOTZ2NzY4SDB6Ii8+PGNpcmNsZSBmaWxsPSIjZDZlYmZmIiBjeD0iMTAyIiBjeT0iMzY4IiByPSI2MCIvPjxwYXRoIGQ9Ik0xMzk2IDBzLTEwMi41IDI0Mi41LTQwNS41IDI0Mi41UzQ5NSAyNDIuNSA0OTUgMjQyLjVWMGg5MDF6IiBmaWxsPSIjZDZlYmZmIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              <span className="block text-blue-600">Empowering</span> Your Workforce. 
              <span className="block">Elevating Your Business.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light">
              Leading HR Consultancy Services Tailored for Modern Businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary btn-lg">
                Get a Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn btn-outline btn-lg">
                Our Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 transform -translate-x-4 translate-y-4"></div>
              <img src="/api/placeholder/600/500" alt="HR Consultancy" className="relative z-10 rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
            <div className="text-gray-600">Expert Consultants</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
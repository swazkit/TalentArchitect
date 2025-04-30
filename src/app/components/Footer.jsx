const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">HR Consultancy</h3>
              <p className="mt-2 text-gray-400 max-w-md">
                Empowering businesses through strategic HR solutions and exceptional talent management.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Recruitment</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">HR Compliance</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Training</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Payroll</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Facebook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} HR Consultancy. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
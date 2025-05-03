const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="rounded-2xl shadow-xl" />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Human Resource Excellence
            </h2>
            
            <div className="divider before:bg-blue-600 after:bg-blue-600 my-6"></div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed pl-12">
                  To transform how companies manage, develop, and retain talent through innovative HR strategies tailored to the unique needs of each organization.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed pl-12">
                  To be the go-to HR partner for organizations striving for excellence, creating workplaces where both businesses and employees thrive together.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  Our Team
                </h3>
                <p className="text-gray-700 leading-relaxed pl-12">
                  With decades of combined experience in human resources management, our team brings expertise and passion to every client engagement.
                </p>
              </div>
            </div>
            
            <a className="btn btn-outline btn-primary mt-8" href="#contact">
              Schedule a consultation now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
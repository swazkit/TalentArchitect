'use client'
import { Check } from 'lucide-react';


const WhyChooseUs = () => {
  const features = [
    {
      title: "Tailored HR Solutions",
      description: "We don't believe in one-size-fits-all. Our solutions are customized to your specific business needs and goals."
    },
    {
      title: "Experienced Consultants",
      description: "Our team consists of seasoned HR professionals with expertise across various industries and business sizes."
    },
    {
      title: "Data-Driven Approach",
      description: "We leverage analytics and insights to make informed decisions that drive measurable results for your organization."
    },
    {
      title: "End-to-End Support",
      description: "From strategy development to implementation and ongoing maintenance, we provide comprehensive support throughout your HR journey."
    },
    {
      title: "Cost-Efficient Services",
      description: "Our solutions are designed to maximize your ROI while minimizing unnecessary expenses in HR management."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            
            <div className="divider before:bg-blue-600 after:bg-blue-600 my-6 max-w-xs"></div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex-shrink-0 mr-4">
                    <div className="badge badge-primary p-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-50 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10">Client Testimonial</h3>
              
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <div className="flex items-start mb-4">
                    <div className="avatar mr-4">
                      <div className="w-14 rounded-full">
                        <img src="/api/placeholder/56/56" alt="Client" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                      <p className="text-gray-600 text-sm">CEO, TechSolutions Inc.</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic relative">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 opacity-75" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative z-10">Working with HR Excellence has transformed our entire hiring and onboarding process. Their strategic approach and tailored solutions have helped us reduce turnover by 40% and boost employee satisfaction scores across the board.</p>
                  </blockquote>
                  
                  <div className="flex mt-4 justify-end">
                    <div className="rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-600" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
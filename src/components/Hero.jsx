import { ArrowRight, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-8">
            <TrendingUp size={16} className="text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Enterprise-Grade Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Smart Hardware Solutions
            <span className="block gradient-text">for Modern Businesses</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Transform your retail and pharmacy operations with integrated hardware and analytics software. 
            Drive efficiency, reduce costs, and enhance customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2">
              Schedule a Demo
              <ArrowRight size={20} />
            </a>
            <a href="#products" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition text-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


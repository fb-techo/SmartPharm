import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-primary-100 mb-10">
          Schedule a demo with our team and discover how SmartPharm can revolutionize your operations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
            Schedule a Demo
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
            Download Brochure
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center text-primary-100">
          <div className="flex items-center gap-3 justify-center">
            <Mail size={20} />
            <span>sales@smartpharm.com</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Phone size={20} />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  )
}


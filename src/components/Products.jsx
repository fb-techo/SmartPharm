import { Tag, Monitor, ShoppingCart, Tv, StickyNote } from 'lucide-react'

const products = [
  {
    icon: Tag,
    title: 'Electronic Shelf Labels (ESLs)',
    description: 'Dynamic pricing and inventory management with real-time updates. Reduce labor costs and pricing errors.',
  },
  {
    icon: Monitor,
    title: 'Digital Posters',
    description: 'Engaging digital displays for promotions, announcements, and brand messaging. Easy content management.',
  },
  {
    icon: ShoppingCart,
    title: 'Price Check Kiosks',
    description: 'Self-service kiosks for pharmacists and customers. Instant price verification and product information.',
  },
  {
    icon: Tv,
    title: 'Kiosk Screens',
    description: 'Interactive displays for advertisements, wayfinding, and customer engagement. High-resolution, durable screens.',
  },
  {
    icon: StickyNote,
    title: 'Backless Labels',
    description: 'Sleek, modern labeling solutions for retail environments. Professional appearance with easy installation.',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive hardware solutions designed for enterprise needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                  <Icon className="text-primary-600 group-hover:text-white transition" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


import { LineChart, TrendingUp, Users, Package } from 'lucide-react'

const analyticsFeatures = [
  {
    icon: LineChart,
    title: 'Sales Analytics',
    description: 'Track sales performance, identify trends, and optimize pricing strategies.',
  },
  {
    icon: TrendingUp,
    title: 'Inventory Insights',
    description: 'Real-time inventory tracking with automated alerts and recommendations.',
  },
  {
    icon: Users,
    title: 'Customer Analytics',
    description: 'Understand customer behavior and preferences to improve engagement.',
  },
  {
    icon: Package,
    title: 'Product Performance',
    description: 'Analyze which products perform best and optimize your product mix.',
  },
]

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Integrated Analytics Platform
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our software seamlessly integrates with all hardware solutions, providing comprehensive 
              analytics and insights to drive data-driven decisions for your business.
            </p>
            <ul className="space-y-4">
              {analyticsFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <LineChart size={120} className="text-primary-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


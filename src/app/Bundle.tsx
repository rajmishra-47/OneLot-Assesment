'use client';

export default function WhyOneLot() {
  const features = [
    {
      title: 'Trust',
      description: 'Regulated by Securities and Exchange Commission (SEC) Philippines',
      icon: '🔒',
    },
    {
      title: 'High Amount',
      description: 'Get the highest loan amounts compared to other banks and lenders',
      icon: '📈',
    },
    {
      title: 'Fast',
      description: 'Get the money within a few hours on the same day',
      icon: '⚡️',
    },
    {
      title: 'Flexible',
      description: 'Loans are tailored to your needs',
      icon: '🚚',
    },
    {
      title: 'Easy',
      description: 'Run through an easy process and get your first loans within days',
      icon: '👍',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why OneLot?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-2xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

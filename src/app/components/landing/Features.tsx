import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline'; // Need to check if heroicons installed
// Assuming heroicons not installed, will use placeholder SVGs or text if fails.
// Actually, I should install heroicons. 
// For now, I'll use simple SVGs embedded.

const features = [
  {
    name: 'Advanced Tracking',
    description:
      'Log every rep, set, and RPE with precision. Visualize your progress over time with interactive charts.',
    icon: (props: any) => (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 17.25h2.25a2.25 2.25 0 002.25-2.25V5.25m0 0h2.25m0 0v11.25a2.25 2.25 0 002.25 2.25h2.25a2.25 2.25 0 002.25-2.25V2.75M13.5 2.75a2.25 2.25 0 00-2.25 2.25v13.5h-2.25" />
        </svg>
    ),
  },
  {
    name: 'Instructor Connect',
    description:
      'Seamlessly connect with your personal trainer. receive custom workout plans and get real-time feedback.',
    icon: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
    ),
  },
  {
    name: 'Performance Analytics',
    description:
      'Deep dive into your training data. Identify strengths, weaknesses, and optimize your routine for maximum gains.',
    icon: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
    ),
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Train Smarter</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to reach your peak
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Designed by athletes, for athletes. We cut out the noise and focus on the metrics that matter.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
             <div className="text-2xl font-bold text-white tracking-tighter">
              MAJAPAHIT<span className="text-indigo-500">GYM</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Forging elite athletes through data-driven training.
            </p>
            <div className="flex space-x-6">
              {/* Social icons placeholders */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Tracking', 'Analytics', 'Coaching', 'Insights'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Pricing', 'Documentation', 'Guides', 'API Status'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2026 PT Trio Sehat Bersama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

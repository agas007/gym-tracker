export default function WhatsNewWidget() {
  return (
    <div className="bg-zinc-900 overflow-hidden rounded-lg shadow border border-zinc-700/50 relative">
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
            <path fill="#4F46E5" d="M42.7,-73.4C54.9,-66.6,64.1,-53.4,72.3,-40.1C80.5,-26.8,87.7,-13.4,87.6,-0.1C87.5,13.2,80,26.4,72.6,40.1C65.2,53.8,57.9,68.1,46.2,76.6C34.5,85.1,18.4,87.8,3.3,82.1C-11.8,76.4,-25.9,62.3,-38.4,50.7C-50.9,39.1,-61.8,30,-69.3,18.2C-76.8,6.4,-80.9,-8,-78.9,-21.5C-76.9,-35,-68.8,-47.6,-57.4,-55.8C-46,-64,-31.3,-67.8,-17.7,-72.1C-4.1,-76.4,8.4,-81.2,21.5,-83.4C34.6,-85.6,47,-85.2,59,-77.4L42.7,-73.4Z" transform="translate(100 100)" />
          </svg>
      </div>
      <div className="p-5 relative z-10">
         <h3 className="text-lg font-medium leading-6 text-white flex items-center gap-2">
            <span>🚀</span> What&apos;s New
         </h3>
         <div className="mt-4 space-y-4">
             {/* Dynamic Changelog Content */}
             <div className="border-l-2 border-indigo-500 pl-4 py-1">
                 <p className="text-xs text-indigo-400 font-semibold mb-1">v0.1.0 (Latest)</p>
                 <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                     <li>Support for assigning a Workout Plan to multiple students at once.</li>
                     <li>New intuitive checkbox UI for student selection.</li>
                     <li>Added Version Information panel and What&apos;s New widget.</li>
                 </ul>
             </div>
             
             {/* You can add more entries down here over time */}
         </div>
      </div>
    </div>
  );
}

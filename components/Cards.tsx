export default function Cards() {
  return (
    <>
      <div className="lg:flex lg:space-x-6">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-200 rounded-2xl">
          <div className="h-full text-center flex items-center flex-col pt-6">
            <div className="flex items-center justify-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 -mt-4 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-xl title-font text-gray-900 tracking-tight tracking-widest text-sm ml-2 capitalize underline has-gradient">
                Event Based Automated Alert
              </h2>
            </div>
            <span className="inline-block h-1 w-20 rounded bg-indigo-500 mt-4 mb-2"></span>
            <ul className="cards-listing pt-4 text-left pl-4">
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                Stay Informed with Automated Event Notifications.
              </li>
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                24/7 Analysis of CCTV Footage for Enhanced Security.
              </li>
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                Daily Summaries for Easy Insights.
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-200 rounded-2xl">
          <div className="h-full text-center flex items-center flex-col pt-6">
            <div className="flex items-center justify-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 -mt-4 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                />
              </svg>

              <h2 className="text-xl title-font text-gray-900 tracking-tight tracking-widest text-sm ml-2 capitalize underline has-gradient">
                PERIPHERY PROTECTION WITH PROACTIVE ALERTS
              </h2>
            </div>
            <span className="inline-block h-1 w-20 rounded bg-indigo-500 mt-4 mb-2"></span>
            <ul className="cards-listing pt-4 text-left pl-4">
              <li className="text-black text- mb-2 leading-relaxed relative pl-4">
                Elevate Industrial Security with AI Video Monitoring.
              </li>
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                Define Zones, Identify Patterns, and Generate Alerts.
              </li>
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                Seamlessly Integrates with Your Existing Camera Setup.
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-200 rounded-2xl">
          <div className="h-full text-center flex items-center flex-col pt-6">
            <div className="flex items-center justify-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 -mt-4 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>

              <h2 className="text-xl title-font text-gray-900 tracking-tight tracking-widest text-sm ml-2 capitalize underline has-gradient">
                HIDDEN WEAPON DETECTION
              </h2>
            </div>
            <span className="inline-block h-1 w-20 rounded bg-indigo-500 mt-4 mb-2"></span>
            <ul className="cards-listing pt-4 text-left pl-4">
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                Introducing SHIELD: Our advanced Patent-Pending Technology.
              </li>
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                Detects Hidden Weapons and More.
              </li>
              <li className="text-black text-md mb-2 leading-relaxed relative pl-4">
                Proactive Alerts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

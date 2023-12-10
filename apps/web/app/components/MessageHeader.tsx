/* eslint-disable @next/next/no-img-element */
const MessageHeader = () => {
  return (
    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <span className="absolute text-green-500 right-0 bottom-0">
            <svg width="20" height="20">
              <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
            </svg>
          </span>
          <img
            src="/techTong.png"
            alt=""
            className="w-10 sm:w-16 h-10 sm:h-16 border rounded-full"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="text-lg sm:text-xl md:text-2xl mt-1 flex items-center">
            <span className="text-gray-700 mr-3">Tech Tong</span>
          </div>
          <span className="text-sm sm:text-md md:text-lg text-gray-600">
            Developer space
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <a href="https://syketb.vercel.app" target="_blank">
          <button
            type="button"
            title="Author | Syket Bhattachergee"
            className="inline-flex items-center justify-center overflow-hidden rounded-full border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <img src="/author.jpg" alt="Syket Bhattachergee" />
          </button>
        </a>
        <a target="_blank" href="https://linkedin.com/in/syketb">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-gray-500"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default MessageHeader;

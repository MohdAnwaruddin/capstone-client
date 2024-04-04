import Link from "next/link";
import Image from "next/image";
import AllNews from "../components/layout/AllNews";

const WholeNews = () => {
    return (
        <div>
            <div>
                <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <img className="w-full h-56 rounded-t-lg " src="news1.jpg" alt="" />
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.vHere are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.vvvvHere are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>

            <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
            <hr />

            <div className="mt-4 flex">
                <div className="flex-shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua.
                    </p>

                </div>
            </div>

            <div className="mt-4 flex">
                <div className="flex-shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                        Lorem ipsum dolor
                    </p>

                </div>
            </div>

            <div className="mt-4 flex">
                <div className="flex-shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,

                    </p>

                </div>
            </div>

            <div className="w-full px-3 mb-2 mt-6">
                <textarea
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                    name="body" placeholder="Comment" required></textarea>
            </div>

            <div className="w-full flex justify-end px-3 my-3">
                <button className="px-2.5 py-1.5 rounded-md text-white bg-indigo-500 font-semibold hover:bg-indigo-600">
                    Post comment
                </button>

            </div>

        </div>

    );
}

export default WholeNews;

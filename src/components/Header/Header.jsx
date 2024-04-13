import * as React from 'react';


const Header = () => {
    return (
        <header>
        <nav class="flex justify-between px-20 py-10 items-center bg-white">
            <h1 class="text-xl text-gray-800 font-bold">Long Island Nepalese Society- NY</h1>
            <div class="flex items-center">
            <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
            </div>
            <ul class="flex items-center space-x-6">
                <li class="font-semibold text-gray-700">Home</li>
                <li class="font-semibold text-gray-700">Articles</li>
                <li class="font-semibold text-gray-700">Calendar</li>
            </ul>
        </div>
        </nav>
    </header>
    );
};
export default Header;

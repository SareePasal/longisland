import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'


const Messages =() =>{
    return (
        <div class="grid lg:grid-cols-3 lg:gap-36 sm:grid-cols-2 md:gap-24 gap-28">
            < Message key="1" />
            < Message key="2" />
            < Message key="3" />
        </div>
    )
}

const Message =()=>{
    return (
        <div className="article container rounded-lg  w-56 border shadow-2xl shadow-gray-900/90">
            <Image
            src="/avatar/profile.jpg"
            alt="president" 
            width="400" 
            height="400"
            class ="rounded-t-lg drop-shadow-2xl"
            />
            <div class="text-black text-bold z-10">
            <p class="justify-center items-center flex relative -top-6 text-red-800 font-extrabold backdrop-blur-sm bg-white/65">
                President
            </p>
            <span class="justify-center items-center truncated  leading-4 line-clamp-5 text-xs relative -top-4 ">
            <p class="flex justify-center items-center">Namaskar!</p>
            <p class="justify-center items-center">Dear Valuable and Respected Members of the Long-island Nepalese Society New York.</p>
            <p>It is with immense gratitude and humility that I address you as the elected President of our Nepali community ‘Long ISland Nepalese Society’ here in New York. First and foremost, I extend my heartfelt appreciation to each and every one of you who participated in the democratic process, whether through casting your vote or contributing to the vibrant discussions that shape our community.</p>

            <p>As we embark on this journey together, I am filled with a deep sense of responsibility and optimism for what we can achieve collectively. Our community represents the rich variety of Nepali culture, tradition, and values, and it is our shared duty to preserve and celebrate these treasures while also embracing the opportunities that lie ahead.</p>

            <p>One of the primary goals during my tenure is to initiate the establishment of a ‘Nepali Community and Cultural Center’. This center will serve as a place for us to come together, share our heritage, celebrate festivals, and provide support for each other in times of need. It will be a beacon for our future generations to stay connected with their roots and a symbol of our unity and strength here in the USA.</p>       

            <p>To bring this vision to life, I am calling on all of you for collaboration, unity, and support. Whether through financial contributions, volunteering your time, or sharing your expertise, we need every hand on deck to make this dream a reality. The success of this endeavor depends on our collective commitment and dedication.</p>

            <p>I firmly believe that our diversity is our strength, and by coming together with respect, compassion, and understanding, we can overcome any challenge and achieve our collective aspirations. Let us build bridges of friendship and cooperation, not only within our Nepali community but also with our fellow citizens and neighbors from all walks of life.</p>

            <p>In the days and months ahead, I look forward to engaging with each of you, listening to your ideas, and working hand in hand to build a brighter future for our community and generations to come.</p>

            <p>Together, let us write the next chapter of our journey with courage, resilience, and unwavering determination.</p>
            <p>Thank You and Namaste, </p>
            </span>
            </div>
        </div>  
    )
}

export default Messages
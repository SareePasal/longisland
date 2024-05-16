import * as React from 'react';
import Image from 'next/image';

const ElectedMembers = () => {
    return(
        <div class=" bg-white flex flex-col lg:w-2/3 sm:p-1 p-10 mx-auto ">
                <p class = "flex font-bold lg:text-2xl justify-center">2024-2025 Elected Members</p>
                <p class = "flex font-bold lg:text-2xl justify-center">२०२४ - २०२५ कार्यसमिति सदस्य</p>
                <div class="grid grid-cols-4 gap-3">
                    <div class="col-span-4 flex flex-col p-4 mx-auto ">
                        <Image class="mx-1 px-5 justify-center "
                            src="/Members/RajanGouli.png"
                            width={150}
                            height={150}
                            alt="Rajan Gouli"
                            />
                                <li class="font-bold text-rose-900 whitespace-pre">1. President: <p>(अघ्यक्ष):</p></li>
                                <li class="text-sky-700"> Kul Prasad Gouli (Rajan) <p>कुल प्रसाद गौली (राजन)</p></li> 

                    </div>
                    <div class="col-span-4 flex flex-row justify-center">
                    <div class=" flex flex-col p-4">
                        <Image class="mx-1 px-5"
                            src="/Members/SabitraSiwakoti.png"
                            width={150}
                            height={150}
                            alt="Sabitra Siwakoti"
                            />
                            <li class="font-bold text-rose-900 whitespace-pre">2. Senior Vice President: <p>(बरिस्ट उपाध्यक्ष):</p></li>
                            <li class="text-sky-700">Sabitra Siwakoti <p>सावित्रा सिवाकोटी</p></li>  
                    </div>
                    <div class=" flex flex-col p-4">
                        <Image class="mx-1 px-5"
                            src="/Members/GokulSapkota.png"
                            width={150}
                            height={150}
                            alt="Gokul Sapkota"
                            />
                            <li class="font-bold text-rose-900 whitespace-pre">3. Vice President: <p>(उपाध्यक्ष):</p></li>
                            <li class="text-sky-700">Gokul Sapkota <p>गोकुल सापकोटा</p></li>  
                    </div>
                    <div class=" flex flex-col p-4">
                        <Image class="mx-1 px-5"
                            src="/Members/IndiraSimkhada.png"
                            width={150}
                            height={150}
                            alt="Indira Simkhada"
                            />
                            <li class="font-bold text-rose-900 whitespace-pre">4. Vice President: <p>(उपाध्यक्ष):</p></li>
                            <li class="text-sky-700">Indira Simkhada (Pande) <p>इन्दिरा सिंखडा (पाण्डे)</p></li>  
                    </div>
                    </div>
                    <div class=" flex flex-col p-4">
                        <Image class="mx-1 px-5"
                            src="/Members/RAJENDRAKUMARKARKI.png"
                            width={150}
                            height={150}
                            alt="RAJENDRA KUMAR KARKI"
                            />
                            <li class="font-bold text-rose-900 whitespace-pre">5. General Secretary: <p>(महासचिव):</p></li><li class="text-sky-700">Rajendra Kumar Karki <p>राजेन्द्र कुमार कार्की</p></li>  
                    </div>
                    <div class=" flex flex-col p-4">
                        <Image class="mx-1 px-5"
                            src="/Members/DeepakAdhikari.png"
                            width={150}
                            height={150}
                            alt="Deepak Adhikari"
                            />
                            <li class="font-bold text-rose-900 whitespace-pre">6. Secretary: <p>(सचिव):</p></li><li class="text-sky-700">Deepak Adhikari <p>दिपक अधिकारी</p></li>  
                    </div> 
                    <div class=" flex flex-col p-4">
                        <Image class="mx-1 px-5"
                            src="/Members/MohanChettry.png"
                            width={150}
                            height={150}
                            alt="Mohan Chettry"
                            />
                            <li class="font-bold text-rose-900 whitespace-pre">7. Secretary: <p>(सचिव):</p></li>
                            <li class="text-sky-700">Mohan Chettri <p>मोहन क्षेत्री</p></li>  
                    </div>                        
                    <div class=" flex flex-col p-4">
                        <Image class="mx-1 px-5"
                            src="/Members/NirmalThapaliya.png"
                            width={150}
                            height={150}
                            alt="Nirmal Thapaliya"
                            />
                            <li class="font-bold text-rose-900 whitespace-pre">8. Treasurer: <p>(कोषाध्यक्ष):</p></li>
                            <li class="text-sky-700">Nirmal Thapaliya <p>निर्मल थपलिया</p></li>  
                    </div>                        
                    
            </div>

    </div>
            
    )
}

export default ElectedMembers
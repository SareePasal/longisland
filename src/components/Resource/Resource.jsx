import * as React from 'react';
import Image from 'next/image';

const Resource = () => {
    return(
        <><div class="max-w-screen-xl flex flex-row mx-auto p-4">
                        <Image class="mx-1 px-5"
                            src="/uscis.png"
                            width={500}
                            height={500}
                            alt="USCIS"
                            /> 
            </div>
        <p class="flex font-bold text-rose-900 whitespace-pre justify-center text-xl">USCIS</p>
        <div class="h-svh  bg-white flex">
            <span class="max-w-screen-md flex flex-row justify-between mx-auto p-4">

                <thead class="shadow-lg bg-cyan-600 bg-sky-500/100">
                    <tr class="flex rounded-3xl text-white text-left text-balance ">
                        <th><p class = "whitespace-break-spaces">USCIS stands for U.S. Citizenship and Immigration Services, an agency of the Department of Homeland Security (DHS).
                            USCIS handles all forms and processing materials related to immigration and naturalization. 
                            <p class = "whitespace-pre">  </p>
                            USCIS is responsible for processing immigrant visa petitions, naturalization petitions, and asylum and refugee applications, 
                            as well as making adjudicative decisions performed at the service centers, and managing all other immigration benefits 
                            functions (i.e., not immigration enforcement) carried out by the former INS.</p>
                            
                            {/* Home Page */}
                            <p class = "whitespace-pre">  </p>
                            <p class = "flex text-bold whitespace-pre">LINK: </p>
                            <a href="https://www.uscis.gov" class="font-medium text-white-600 dark:text-blue-500 hover:underline">https://www.uscis.gov/</a>
                            
                            {/* ALL Florm */}
                            <p class = "whitespace-pre">  </p>
                            <p class = "flex text-bold whitespace-pre">All Forms: </p>
                            <a href="https://www.uscis.gov/forms/all-forms" class="font-medium text-white-600 dark:text-blue-500 hover:underline">https://www.uscis.gov/forms/all-forms</a>

                            {/* Case Status Online */}
                            <p class = "whitespace-pre">  </p>
                            <p class = "flex text-bold whitespace-pre">Case Status Online: </p>
                            <a href="https://egov.uscis.gov/" class="font-medium text-white-600 dark:text-blue-500 hover:underline">https://egov.uscis.gov/</a>

                            {/* Check Case Processing Times */}
                            <p class = "whitespace-pre">  </p>
                            <p class = "flex text-bold whitespace-pre">Check Case Processing Times: </p>
                            <a href="https://egov.uscis.gov/processing-times/" class="font-medium text-white-600 dark:text-blue-500 hover:underline">https://egov.uscis.gov/processing-times/</a>
                            
                            {/* How to Change Your Address */}
                            <p class = "whitespace-pre">  </p>
                            <p class = "flex text-bold whitespace-pre">How to Change Your Address: </p>
                            <p class = "flex whitespace-pre px-5">Paper Format: </p>
                            <a href="https://www.uscis.gov/ar-11" class="font-medium px-5 text-white-600 dark:text-blue-500 hover:underline">https://www.uscis.gov/ar-11</a>

                            <p class = "whitespace-pre">  </p>
                            <p class = "flex whitespace-pre px-5">Online through a USCIS online account: </p>
                            <a href="https://www.uscis.gov/addresschange" class="font-medium px-5 text-white-600 dark:text-blue-500 hover:underline">https://www.uscis.gov/addresschange</a>

                        </th>
                    </tr>
                </thead>
            </span>
        </div></>
    )
}

export default Resource
import * as React from 'react';

const FinancialReport = ({title,content,heading,balanceHeading}) => {
    const contTable = []
    const bHeading = 
        <thead class=" hover:bg-cyan-600 bg-sky-500/100 rounded-3xl">    
            <tr class="rounded-3xl">   
                <th scope="col" class="font-small md:px-6  md:py-4 ">
                    <span class="text-sm">{balanceHeading[0]}</span></th>
                <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{balanceHeading[1]}</th>
                <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{balanceHeading[2]}</th>
                <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{balanceHeading[3]}</th>
                <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{balanceHeading[4]}</th>
                
            </tr>
        </thead>
    const headItem = 
    <thead class=" hover:bg-cyan-600 bg-sky-500/100 rounded-3xl"> 
        <tr class="rounded-3xl">   
            <th scope="col" class="font-small md:px-6  md:py-4 ">
                <span class="text-sm">{heading[0]}</span></th>
            <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{heading[1]}</th>
            <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{heading[2]}</th>
            <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{heading[3]}</th>
            <th scope="col" class="font-small sm:font-bold md:px-6  md:py-4 text-sm">{heading[4]}</th>
        </tr>
        </thead>

   content.map((val,index) => {
        contTable.push(
            <tr class="border-b border-neutral-00 bg-black/[0.02] dark:border-white/10 hover:bg-cyan-200 " key={index}>
                <td class=" text-black lg:whitespace-nowrap lg:px-6 px-1 lg:py-4 text-sm sm:font-medium" key={index}>{val[0]}</td>
                <td class="lg:whitespace-nowrap text-black lg:px-6  lg:py-4 text-sm sm:font-medium" key={index}>{val[1]}</td>
                <td class="lg:whitespace-nowrap text-black lg:px-6  lg:py-4 text-sm sm:font-medium" key={index}>{val[2]}</td>
                <td class="lg:whitespace-nowrap text-black lg:px-6  lg:py-4 text-sm sm:font-medium" key={index}>{val[3]}</td>
                <td class="lg:whitespace-nowrap text-black lg:px-6  lg:py-4 text-sm sm:font-medium" key={index}>{val[4]}</td>
            </tr>
        )
    })  
    return(
        <div class=" bg-white flex flex-row justify-center text-center sm:px-6">
            <div class="p-4">
                <h1 class="text-lg sm:text-xl font-semibold whitespace-nowrap text-gray-500 mx-auto text-center dark:text-gray-400">
                    {title}
                </h1>
                <div class="mt-5 sm:mt-20 shadow-lg shadow-cyan-500/50 rounded-3xl">
                    <div class="overflow-hidden ">
                        <table class="w-full text-center text-sm font-light dark:text-white border-collapse rounded-3xl">
                                { (title.includes("Checking"))
                                ? 
                                bHeading:
                                headItem
                            }
                            <tbody> 
                                {contTable}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default FinancialReport
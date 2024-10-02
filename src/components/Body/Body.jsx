import * as React from 'react'; 
import Hero from './Hero'
import Messages from './messages'

const Body = () => {
    return(
        <div class=" bg-white flex flex-col">
            <Hero/>
            <div class="flex flex-row justify-between mx-auto p-4">
              <Messages/>
            </div>
        </div>
    )
}

export default Body
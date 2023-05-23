import React from "react";
import Typewriter from 'typewriter-effect'

const TypingEffect = () => {
    return ( 
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
        onInit={(typewriter) =>{
            typewriter.start()
            typewriter.typeString("Hello, I'm Ben")
            typewriter.pauseFor(1000)
            typewriter.deleteAll()
            typewriter.pauseFor(800)
            typewriter.typeString("A Soft")
            typewriter.pauseFor(800)
            typewriter.deleteChars(4)
            typewriter.pauseFor(400)
            typewriter.typeString("Junior Software Developer")
            typewriter.deleteAll()
          
        }}/>
     );
}
 
export default TypingEffect;
import React from 'react'
import Typewriter from 'typewriter-effect';
const CustomTypeWriter = () => {
  return (
     <Typewriter
  options={{
    loop: true,
    deleteSpeed: 2,
    delay: 50,
  }}
  onInit={(typewriter) => {
    typewriter.typeString('Verospiron.cz')
      .pauseFor(2500)
      .deleteAll(1)
      typewriter.typeString('Najdete zde - kazuistiky, reprinty, články a další spoustu zajímavých informací.')
      .pauseFor(2500)
      .deleteAll(1)
      .pauseFor(10000)
      .callFunction(()=>{
        typewriter.pauseFor(10000);
      })
      .start();
  }}
/>
 
  )
}

export default CustomTypeWriter
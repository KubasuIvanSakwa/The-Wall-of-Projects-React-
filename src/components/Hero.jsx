import { useEffect, useState } from "react"
import TypeWriter from "./TypeWriter"
import { NavLink } from "react-router-dom"

function Hero() {
  const type = 'The Wall of Projects'
  const [showH4, setShowH4] = useState(false)

  useEffect(() => {
    // Set a timeout to show the h4 element after a delay (e.g., 2000 milliseconds)
    const timeoutId = setTimeout(() => {
      setShowH4(true)
    }, 2400) // Adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId)
  }, []) // Empty dependency array ensures the effect runs only once on mount

  return (
    <section className="w-full flex-col h-[37rem] flex justify-center items-center">
      <h1 className="text-4xl font-extrabold text-[#A99985]">
          <TypeWriter text={type} delay={100} />
      </h1>
      {showH4 && (
        <NavLink to='/contribute' className="underline underline-offset-4 text-2xl text-[#F5F1ED]">
          <TypeWriter text={'contribute'} delay={100} /> &nbsp;&nbsp;&#x2B67;
          
        </NavLink>
      )}
    </section>
  );
}

export default Hero;

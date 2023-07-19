import { useEffect } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Testinomial from '../components/Testinomial'
import {CountUp} from 'countup.js'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
const Home = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   threshold: 0.2,
  // });
  // useEffect(() => {
  //   if (inView) {
  //     controls.start({
  //       y:0,
  //       transition: {delay:1.2, duration:2},
  //     })
  //   }else{
  //     controls.start({y: -2000})
  //   }
  // }, [inView]);


  const cand = new CountUp('cand',4500, {duration: 5,enableScrollSpy: true})
  cand.start()
  const empl = new CountUp('empl',5600, {duration: 5,enableScrollSpy: true})
  empl.start()
  const plac = new CountUp('plac',500, {duration: 5,enableScrollSpy: true})
  plac.start()
  return (
    <>
    <Hero/>
    <motion.div 
    // ref = {ref}
    // animate = {controls}
    initial = {{y:-200, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{duration: 1.5, delay: 1.2}}
    viewport={{once: false}}
    className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 sm:grid-cols-3">
        <div className="text-center p-6">
          <h6 className="text-5xl font-bold text-rose-500" id= "cand">4500</h6>
          <p className="font-bold p-2">Registered Candidates</p>
        </div>
        <div className="text-center p-6">
          <h6 className="text-5xl font-bold text-rose-500" id= "empl">5600</h6>
          <p className="font-bold p-2">Employers</p>
        </div>
        <div className="text-center p-6">
          <h6 className="text-5xl font-bold text-rose-500" id = "plac">500</h6>
          <p className="font-bold p-2">Placed Candidtates</p>
        </div>
      </div>
    </motion.div>
    <Testinomial/>
    </>
  )
}

export default Home
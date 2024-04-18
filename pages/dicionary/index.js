//components
import DicSlider from '../../components/DicSlider';
import Header from '../../components/Header';

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return ( <div> <Header/>
  <div className='h-full bg-primary/30 py-32 text-center'>
     <div className='container mx-auto h-full flex flex-col justify-center'>
      {/* title */}
       <motion.h2 variants={fadeIn('up', 0.2) }
       initial='hidden'
       animate='show'
       exit='hidden'
       className='h2 mb-8 xl:mb-0'>
      Dicionários <span className='text-accent'>aqui.</span>
       </motion.h2>
       {/* slider */}
       <motion.div
       variants={fadeIn('left', 0.4) }
       initial='hidden'
       animate='show'
       exit='hidden'>
       <DicSlider/>
       </motion.div>
      </div> </div>
  </div>
  );
};

export default Testimonials;

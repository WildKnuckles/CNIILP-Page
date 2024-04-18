//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
     <Link href={'https://www.cplp.org/'} className=" "> 
        <Image
          src={'/rounded-logo.png'}
          width={131}
          height={138}
          alt=''
          className="animate-spin-slow w-full h-full max-w-[131px] max-h-[138px]" 
      /> 
       </Link>  
    </div>
  )
}

export default ProjectsBtn;

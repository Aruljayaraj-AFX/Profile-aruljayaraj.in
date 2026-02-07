import { motion } from "framer-motion";
export default function Profile_Content() {
  return (
    <div className="min-h flex flex-col z-50">
      <div className="flex flex-col px-2 code-saver text-[12px] leading-3.5 font-medium">
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut" ,delay: 1}}
        className="text-gray-400">
          &lt;!-- start .scope-profile --&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut",delay: 0.7 }}
        className="text-blue-300">
          &lt;section <span className="text-blue-200">class</span>=
          "<span className="text-orange-300">scope-profile</span>"&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 8, ease: "easeOut" ,delay: 1 }}
        className="pl-4 text-blue-300">
          &lt;h3&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut" }}
        className="pl-8 text-white">PROFILE</motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut",delay: 1 }}
        className="pl-4 text-blue-300">
          &lt;/h3&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut",delay: 0.8 }}
        className="pl-4 text-blue-300">
          &lt;p&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.6, ease: "easeOut",delay:0.3 }}
        className="pl-8 mr-6 text-gray-300 text-[12px] leading-4 font-codesaver whitespace-pre-wrap ">
          {`Hi, I’m Arul Jayaraj — a Full Stack & AI Engineer 
and creative developer based in Chennai, Tamil Nadu. 
With over one year of hands-on experience through
training and internships,I’ve worked 
on a wide range of projects to build modern,
high-performance web applications that balance
clean design, scalability, and usability.`}
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut" ,delay: 0.8 }}
        className="pl-4 text-blue-300">
          &lt;/p&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut",delay: 0.8 }}
        className="pl-4 text-blue-300">
          &lt;p&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.1, ease: "easeOut",delay:0.3 }}
        className="pl-8 mr-6 text-gray-300 text-[12px] leading-4 font-codesaver whitespace-pre-wrap ">
          {`Throughout my journey, I’ve explored various
technologies across full stack development and
artificial intelligence, helping me develop a 
solid foundation in system design, best practices,
and delivering reliable, impactful solutions.`}
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut" ,delay: 0.8}}
        className="pl-4 text-blue-300">
          &lt;/p&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut" ,delay: 0.8}}
        className="pl-4 text-blue-300">
          &lt;p&gt;
        </motion.pre>
    
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.1, ease: "easeOut",delay:0.3}}
        className="pl-8 mr-6 text-gray-300 text-[12px] leading-4 font-codesaver whitespace-pre-wrap ">
          {`I’m currently open to new opportunities and 
excited to collaborate with startups, teams, and 
businesses looking to build intelligent, 
user-focused digital products that combine modern 
web engineering with AI-driven innovation.`}
        </motion.pre>       
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.1, ease: "easeOut" ,delay: 0.8}}
        className="pl-4 text-blue-300" >
          &lt;/p&gt;
        </motion.pre>
  
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut",delay: 0.7 }}
        className="text-blue-300">
          &lt;/section&gt;
        </motion.pre>
        <motion.pre 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.1, ease: "easeOut",delay: 1 }}
        className="text-blue-300">
        &nbsp;
        </motion.pre>
        </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/apoorv.jpeg"
              alt="Apoorv Jain"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              Hi, I'm Apoorv Jain, a passionate Full Stack Developer.I 
              love building full-stack and my tools are ReactJs, 
              Javascript, NodeJs, Postgres, and SQL. I have good 
              knowledge in the exquisite realm of Programming and
              Web Development and the word 'Lisztomainiac' best 
              describes me!
               
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              With extensive experience in modern web technologies and a strong
              foundation in both frontend and backend development, I help
              businesses build scalable solutions and mentor aspiring developers
              to achieve their goals.
            </motion.p>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              I excel at coordinating cross-functional teams,
             ensuring effective communication, and assisting
              in project planning and execution. With 
              2 years of invaluable experience, I've played
              a pivotal role in supporting project lifecycles,
              from inception to successful completion. As an
              adept developer, I have a well-rounded programming
              skill set and honed software development talents.
            </motion.p>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

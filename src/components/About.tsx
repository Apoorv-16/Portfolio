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
              src="/Self_1.jpg"
              alt="Apoorv Jain"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Hi, I’m Apoorv Jain, a Backend Engineer at MPL, where I design
            and scale real-time, high-concurrency systems that power one
            of the world’s most played money-based games, 8 Ball Pool.
            My work involves building global matchmaking systems, fraud
            prevention layers, WebSocket/GRPC-powered communication, and
            Kafka-driven event pipelines—all optimized to deliver ultra-low
            latency and seamless gameplay to millions of users worldwide.
            I also developed Kubernetes-based auto-scaling solutions to 
            handle unpredictable traffic spikes, ensuring consistent
            reliability and precision at scale.
               
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            With over 2 years of professional experience, I’ve gained
            expertise in TypeScript, Java, Node.js, React, PostgreSQL,
            SQL, Redis, Kafka, AWS, Docker, and Kubernetes. My focus
            is on building scalable, fault-tolerant, and user-focused
            systems, applying performance optimization and distributed
            system design to solve real-world problems.
            </motion.p>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Previously, at Deloitte, I worked as a Full Stack Developer,
            where I delivered enterprise-grade applications,
            including a real-time chat platform (React.js, Node.js,
            Express, MongoDB) that boosted client interaction by
            30% and optimized backend–frontend communication by
            80%. This role gave me a strong foundation in 
            balancing frontend usability with backend scalability.
            </motion.p>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

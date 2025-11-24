import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML & CSS",
    icon: (
      <>
        <FaHtml5 className="text-orange-500" />{" "}
        <FaCss3Alt className="text-blue-600" />
      </>
    ),
  },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const skillVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export default function SkillSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={skillVariant}
              whileHover={{ scale: 1.05 }}
              className="relative bg-card/70 backdrop-blur-xl border border-secondary/40 
              rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* LARGE TRANSPARENT BACKGROUND TEXT */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className="text-5xl font-extrabold opacity-10 tracking-widest select-none"
                  style={{
                    color: i % 2 === 0 ? "var(--primary)" : "var(--secondary)",
                  }}
                >
                  {skill.name.toUpperCase()}
                </span>
              </div>

              {/* ICON LOGO */}
              <div className="relative w-14 h-14 mx-auto mb-5 flex items-center justify-center text-4xl">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

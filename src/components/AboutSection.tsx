import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Palette, Zap, Building2, Calendar } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 80, color: "from-yellow-400 to-orange-500" },
    { name: "React/Next.js", level: 90, color: "from-blue-400 to-cyan-500" },
    { name: "Python/AI/ML", level: 90, color: "from-green-400 to-emerald-500" },
    { name: "Node.js/Express", level: 88, color: "from-purple-400 to-pink-500" },
    { name: "Database Design", level: 86, color: "from-indigo-400 to-purple-500" }
  ];

  const experiences = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Building scalable web applications with modern technologies",
      highlight: "An Year"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Enthusiast",
      description: "Integrating machine learning models into user-friendly interfaces",
      highlight: "4 Projects"
    },
    
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
      highlight: "Always Learning"
    }
  ];

  const internships = [
    {


      company: "Bluestock Fintech",
      role: "Software Developer Intern",
      duration: "Summer 2025",
      description: " Contributed to developing a page for their official website, focusing on responsive design and clean frontend implementation.",
      technologies: ["React", "Node.js", "HTML", "CSS"]
    },
    {


      company: "Embedded Visions Technologies",
      role: "Python Developer Intern",
      duration: "Summer 2024",
      description: " Proactively contributed to assigned projects, demonstrating diligence and a strong work ethic",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      company: "Aarunya Community",
      role: "Artifical Intelligence Intern",
      duration: "Winter 2024",
      description: "Built ML models for data analysis and prediction systems",
      technologies: ["Python", "TensorFlow", "Pandas"]
    },

  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions that bridge technology and human experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio and Skills */}
          <div className="space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
  <p>
    I'm a 4th year CSE student and an AI-focused full-stack developer passionate about building intelligent systems that improve lives. With hands-on experience in integrating generative AI and LLMs into real-world applications, I specialize in creating smart, responsive user experiences.
  </p>
  <p>
    My work spans from developing health chatbots to building AI-enhanced web platforms, all with a strong emphasis on ethical, human-centered technology. I’m constantly exploring the evolving landscape of machine learning, NLP, and AI infrastructure to push boundaries and solve meaningful problems.
  </p>
</div>

            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience and Internships */}
          <div className="space-y-8">
            {/* Experience Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.title}
                        </h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium">
                          {exp.highlight}
                        </span>
                      </div>
                      <p className="text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Internships Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                Internships
              </h3>
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.company}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {internship.role}
                          </h4>
                          <p className="text-cyan-300 font-medium">{internship.company}</p>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium">
                          <Calendar className="w-3 h-3" />
                          {internship.duration}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">
                        {internship.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-md text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun Fact Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-6 shadow-xl"
            >
              <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Fun Fact
              </h4>
              <p className="text-gray-300">
                I’ve built a health chatbot, a portfolio site, basically, my projects can heal me and showcase me. That’s a deadly duo!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
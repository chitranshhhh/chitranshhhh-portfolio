
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Health Companion: Intelligent Chat & Smart Care Support",
      description: "A real-time health chat application integrating AI assistance for mental and general wellness, offering intelligent reply suggestions, mood analysis, and personalized care guidance",
      image: "healthhive-interactive1.gif",
      tech: ["React", "Node.js", "Llama 3.1 via Ollama", "Socket.IO"],
      category: "AI",
      LinkedIn: "https://www.linkedin.com/posts/chitransh-sharmaaa_ai-healthhive-chatbot-activity-7312073117135179777-dGzl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo00fUB9u9l_lX15jDCmSQKyIhgipmOxwk",
      github: "https://github.com/chitranshhhh/Health-Chatbot.git"
    },
    {
      id: 2,
      title: "Video Fingerprinting System",
      description: "A modern admin dashboard for analyzing and managing video content using fingerprinting technology, featuring real-time analytics, content matching, and inventory tracking.",
      image: "/video_fingerprinting.gif",
      tech: ["Node.js", "OpenCV", "Python", "FFmpeg"],
      category: "Web",
      LinkedIn: "https://www.linkedin.com/posts/chitransh-sharmaaa_hackathon-innovation-leadership-activity-7282069606800764930-bs4Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo00fUB9u9l_lX15jDCmSQKyIhgipmOxwk",
      github: "https://github.com/chitranshhhh/video_fingerprinting.git"
    },
    {
      id: 3,
      title: "Dialer App Prototype",
      description: "A cross-platform mobile dialer app prototype with smart contact management, call logs, and seamless user interaction, built for performance and UI flexibility.",
      image: "/call.gif",
      tech: ["Android Studio", "Kotlin", "XML", "Android Emulator"],
      category: "Mobile",
      LinkedIn: "https://www.linkedin.com/posts/chitransh-sharmaaa_androiddevelopment-dialerapp-prototype-activity-7291123378210459648-Ym2H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo00fUB9u9l_lX15jDCmSQKyIhgipmOxwk",
      github: "https://github.com/chitranshhhh/callingapp.git"
    },
  ];

  const filters = ['All', 'AI', 'Web', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work spanning AI applications, web development, and mobile solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                  : "border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
  <a
    href={project.LinkedIn}
    target="_blank"
    rel="noopener noreferrer"
    tabIndex={-1}
    className="focus:outline-none"
  >
    <Button
      size="sm"
      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      LinkedIn
    </Button>
  </a>
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    tabIndex={-1}
    className="focus:outline-none"
  >
    <Button
      size="sm"
      variant="outline"
      className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
    >
      <Github className="w-4 h-4 mr-2" />
      Code
    </Button>
  </a>
</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/10 border-white/20 text-cyan-300 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState({})
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 20, icon: '🐍' },
        { name: 'JavaScript', level: 10, icon: '⚡' },
        { name: 'HTML/CSS', level: 70, icon: '🌐' },
      ]
    },
    {
      title: 'Currently Learning',
      skills: [
        { name: 'React Basics', level: 5, icon: '⚛️' },
        { name: 'Web Development', level: 20, icon: '🌟' },
        { name: 'Git & GitHub', level: 60, icon: '📦' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 40, icon: '📦' },
        { name: 'GitHub', level: 45, icon: '🐙' },
        { name: 'VS Code', level: 35, icon: '📝' },
        { name: 'Terminal', level: 30, icon: '💻' },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 85, icon: '🧩' },
        { name: 'Teamwork', level: 80, icon: '🤝' },
        { name: 'Communication', level: 75, icon: '💬' },
        { name: 'Learning', level: 95, icon: '📚' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations after a short delay
            setTimeout(() => {
              const skills = {}
              skillCategories.forEach((category) => {
                category.skills.forEach((skill) => {
                  skills[skill.name] = skill.level
                })
              })
              setAnimatedSkills(skills)
            }, 300)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section skills" ref={sectionRef}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${animatedSkills[skill.name] || 0}%`,
                          transition: 'width 1.2s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="learning-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="learning-title">Currently Learning</h3>
          <div className="learning-tags">
            {['TypeScript', 'Next.js', 'Docker', 'Cloud Computing', 'Machine Learning'].map((tech) => (
              <span key={tech} className="learning-tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

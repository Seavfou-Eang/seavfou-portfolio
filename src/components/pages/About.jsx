import { motion } from 'framer-motion'
import './About.css'

function About() {
  const stats = [
    { number: '17', label: 'Years Old' },
    { number: '2+', label: 'Projects' },
    { number: 'CADT', label: 'Student' },
    { number: '∞', label: 'Curiosity' },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image-container"
            {...fadeInUp}
          >
            <img
              src="https://avatars.githubusercontent.com/u/260343091?v=4"
              alt="Seavfou-Eang"
              className="about-image"
            />
            <div className="about-image-glow"></div>
          </motion.div>

          <motion.div 
            className="about-text"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-subtitle">
              Software Engineering Student at{' '}
              <span className="gradient-text">CADT</span>
            </h3>
            
            <p className="about-description">
              Hello! I'm Seavfou-Eang, a 17-year-old passionate Software Engineering 
              student at the Cambodia Academy of Digital Technology (CADT). I have a 
              deep curiosity for technology and love exploring new programming languages 
              and frameworks.
            </p>
            
            <p className="about-description">
              My journey in software development started with a simple curiosity about 
              how things work on the internet. Since then, I've been continuously learning 
              and building projects that solve real-world problems. I'm particularly 
              interested in Python development and web technologies.
            </p>
            
            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or helping fellow students learn 
              programming. I believe in the power of technology to make a positive 
              impact on society.
            </p>

            <div className="about-buttons">
              <a 
                href="https://github.com/Seavfou-Eang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="stats-grid"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat-card hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="stat-number gradient-text">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

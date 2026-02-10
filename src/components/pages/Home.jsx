import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import './Home.css'

// 3D Cube Component
function AnimatedCube() {
  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[2.05, 2.05, 2.05]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  )
}

// 3D Scene
function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <AnimatedCube />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

function Home() {
  return (
    <section className="home">
      <Scene3D />
      
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text">Seavfou-Eang</span>
          </h1>
          
          <div className="typewriter">
            <TypeAnimation
              sequence={[
                'Software Engineering Student',
                2000,
                'Passionate Learner',
                2000,
                'Aspiring Developer',
                2000,
                '17 Years Old',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typewriter-text"
            />
          </div>
          
          <p className="hero-description">
            I'm a 17-year-old Software Engineering student at CADT who loves 
            learning new things and building innovative projects.
          </p>
          
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <img
            src="https://avatars.githubusercontent.com/u/260343091?v=4"
            alt="Seavfou-Eang"
            className="profile-image animate-float"
          />
          <div className="tech-icons">
            <span className="tech-icon">Python</span>
            <span className="tech-icon">JavaScript</span>
            <span className="tech-icon">React</span>
            <span className="tech-icon">HTML</span>
            <span className="tech-icon">CSS</span>
          </div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}

export default Home

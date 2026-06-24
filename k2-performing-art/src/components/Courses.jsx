import { motion } from "framer-motion";
import { Music, Shield, Sparkles } from "lucide-react";

const courses = [
  {
    title: "Dance",
    icon: <Music />,
    text: "Learn freestyle, western, Bollywood and stage performance dance.",
  },
  {
    title: "Karate",
    icon: <Shield />,
    text: "Build discipline, fitness, confidence and self-defence skills.",
  },
  {
    title: "Performing Art",
    icon: <Sparkles />,
    text: "Develop expression, confidence, stage presence and creativity.",
  },
];

function Courses() {
  return (
    <section id="course" className="section dark-section">
      <span className="section-tag">Our Courses</span>
      <h2>Train With Passion & Discipline</h2>

      <div className="cards">
        {courses.map((course, index) => (
          <motion.div
            className="card"
            key={course.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">{course.icon}</div>
            <h3>{course.title}</h3>
            <p>{course.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
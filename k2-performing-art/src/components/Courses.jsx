import { motion } from "framer-motion";
import {
  Music,
  Dumbbell,
  Activity,
  Flower2,
  Shield,
  CircleDot,
} from "lucide-react";

const courses = [
  {
    title: "Dance",
    icon: <Music />,
    text: "Learn freestyle, Bollywood, western and stage performance dance with confidence.",
  },
  {
    title: "Aerobics",
    icon: <Dumbbell />,
    text: "Improve stamina, flexibility and fitness through energetic aerobics sessions.",
  },
  {
    title: "Zumba",
    icon: <Activity />,
    text: "Enjoy fun dance-fitness workouts with music, movement and full-body energy.",
  },
  {
    title: "Yoga",
    icon: <Flower2 />,
    text: "Build flexibility, balance, focus and inner strength with guided yoga practice.",
  },
  {
    title: "Karate",
    icon: <Shield />,
    text: "Learn discipline, confidence, self-defence, strength and martial arts basics.",
  },
  {
    title: "Skating",
    icon: <CircleDot />,
    text: "Develop balance, body control, confidence and skating skills with proper training.",
  },
];

function Courses() {
  return (
    <section id="course" className="section dark-section">
      <span className="section-tag">Our Courses</span>
      <h2>Train With Passion, Fitness & Discipline</h2>

      <div className="cards courses-grid">
        {courses.map((course, index) => (
          <motion.div
            className="card"
            key={course.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
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
import { motion } from "framer-motion";
import { Award, Users, CalendarCheck, Dumbbell } from "lucide-react";

const services = [
  {
    icon: <Users />,
    title: "Regular Classes",
    text: "Daily and weekly batches for kids, teens and adults.",
  },
  {
    icon: <Award />,
    title: "Competition Training",
    text: "Special preparation for competitions and stage performances.",
  },
  {
    icon: <CalendarCheck />,
    title: "Weekend Batches",
    text: "Flexible weekend batches for students and working people.",
  },
  {
    icon: <Dumbbell />,
    title: "Fitness & Discipline",
    text: "Training focused on fitness, strength, confidence and discipline.",
  },
];

function Services() {
  return (
    <section id="services" className="section dark-section">
      <span className="section-tag">Services</span>
      <h2>What We Provide</h2>

      <div className="cards service-cards">
        {services.map((service, index) => (
          <motion.div
            className="card"
            key={service.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
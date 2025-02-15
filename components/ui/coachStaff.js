import { motion } from "framer-motion";
import { CoachStaff } from "../card/cardContent";

const coaches = [
  {
    name: "Jane Smith",
    role: "Technical Director",
    image: "/asset/coach2.jpg",
    bio: "An expert in player development, Jane specializes in refining technical skills and game intelligence.",
  },
  {
    name: "John Doe",
    role: "Head Coach",
    image: "/asset/coach1.jpg",
    bio: "John has 15 years of experience coaching elite football players and has developed top-tier talent across Europe.",
  },
  {
    name: "Mike Johnson",
    role: "Fitness Coach",
    image: "/asset/coach3.jpg",
    bio: "Mike focuses on strength, agility, and endurance, ensuring players are in peak physical condition.",
  },
];

export default function CoachingStaff() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-blue">Meet Our Coaching Staff</h2>
        <p className="text-gray-600 mt-2">
          Expert trainers dedicated to shaping the next generation of football stars.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6">
        {coaches.map((coach, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CoachStaff coach={coach} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

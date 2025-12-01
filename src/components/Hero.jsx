import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center px-6 bg-slate-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-white"
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Learn Anytime, Anywhere
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-accent">
          Upgrade Your Skills with CourseMaster
        </h2>

        {/* Paragraph */}
        <p className="text-md md:text-lg text-white mb-8">
          Join thousands of students and instructors on a journey of knowledge.
          Explore courses, track progress, and achieve your goals.
        </p>

        {/* Button */}
        <button
          className="px-8 py-4 rounded-lg font-semibold"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-background)",
          }}
        >
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

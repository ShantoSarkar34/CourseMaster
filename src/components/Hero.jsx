import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center px-6 hero_bg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl"
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 text-[#df8c0ff1] lg:leading-[7rem]">
          Learn Anytime, From Anywhere
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-[#13a149]">
          Upgrade Your Skills with CourseMaster
        </h2>

        {/* Paragraph */}
        <p className="text-md md:text-lg text-white mb-12">
          Join thousands of students and instructors on a journey of knowledge.
          Explore courses, track progress, and achieve your goals.
        </p>

        {/* Button */}
        <button
          className="px-8 py-4 rounded-lg font-semibold cursor-pointer"
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

import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.04 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300"
    >
      <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
      
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold">{course.title}</h2>
        <p className="text-gray-600 text-sm">{course.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-blue-600 text-lg">${course.price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;

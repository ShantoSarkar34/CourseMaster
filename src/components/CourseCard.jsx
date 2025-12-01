import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate()

  const handleNavigate=()=>{
    navigate(`/course/${course.id}`)
  }
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300"
    >
      <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
      
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold">{course.title}</h2>
        <p className="text-gray-600 text-sm">{course.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-blue-600 text-lg">${course.price}</span>
          <button onClick={handleNavigate} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;

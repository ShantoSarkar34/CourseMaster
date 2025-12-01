import { useParams } from "react-router-dom";
import { courses } from "../data/fakeCourses";


const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return <div className="text-center mt-20">Course not found</div>;
  }

  return (
    <div className=" py-10 w-full bg-gray-100 lg:pt-20">
      <div className=" container mx-auto px-4">

      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-160 object-cover rounded-lg mb-6"
      />

      {/* Title & Price */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-4xl font-bold text-darkText">{course.title}</h1>
        <span className="text-2xl font-semibold text-primary">${course.price}</span>
      </div>

      {/* Long Description */}
      <p className="text-midText mb-6">{course.longDescription}</p>

      {/* Syllabus */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-darkText mb-2">Syllabus</h2>
        <ul className="list-disc list-inside text-midText">
          {course.syllabus.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Coupon */}
      {course.coupon && (
        <div className="mb-6 text-midText">
          <strong>Coupon Code:</strong> {course.coupon}
        </div>
      )}

      {/* Public Comments */}
      <div>
        <h2 className="text-2xl font-semibold text-darkText mb-4">Student Reviews</h2>
        <div className="space-y-4">
          {course.comments.map(comment => (
            <div key={comment.id} className="flex items-start space-x-4">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-darkText">{comment.name}</h3>
                <p className="text-midText">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default CourseDetails;

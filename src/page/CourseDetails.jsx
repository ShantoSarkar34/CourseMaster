const CourseDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Course Title</h1>
      <img className="rounded-xl w-full mb-6"
        src="https://i.ibb.co/g6ssk0G/react.jpg"
        alt="Course" />

      <p className="text-gray-700 mb-4">
        Detailed course description will go here...
      </p>

      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;

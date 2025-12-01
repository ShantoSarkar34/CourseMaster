const EnrolledCourseView = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Enrolled Course</h1>

      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">Course Title</h2>
        <p className="text-gray-600 mb-4">
          Course progress and lessons will be shown here.
        </p>

        <button className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseView;

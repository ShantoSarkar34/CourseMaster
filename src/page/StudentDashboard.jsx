const StudentDashboard = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="font-semibold">My Courses</h2>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="font-semibold">Progress</h2>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="font-semibold">Certificates</h2>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

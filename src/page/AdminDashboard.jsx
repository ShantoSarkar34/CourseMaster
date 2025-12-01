const AdminDashboard = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="font-semibold">Manage Courses</h2>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="font-semibold">Users</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

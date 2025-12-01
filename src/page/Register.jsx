const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name"
            className="w-full border rounded-md p-3" />
          <input type="email" placeholder="Email"
            className="w-full border rounded-md p-3" />
          <input type="password" placeholder="Password"
            className="w-full border rounded-md p-3" />

          <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

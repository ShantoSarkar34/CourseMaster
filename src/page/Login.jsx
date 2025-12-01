const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

        <form className="space-y-4">
          <input type="email" placeholder="Email"
            className="w-full border rounded-md p-3" />
          <input type="password" placeholder="Password"
            className="w-full border rounded-md p-3" />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

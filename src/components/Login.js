
const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500">
        <div className="bg-white rounded-lg shadow-lg p-8 h-96 w-80">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
          <form className="h-10">
            <div className="mb-4">
              <label  className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Enter your email"
              
              />
            </div>
            <div className="mb-4">
              <label  className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Enter your password"
               
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Log In
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account? Sign up
              
            </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  
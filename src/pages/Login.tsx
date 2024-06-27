import MainHeader from "../components/Navigation/MainHeader";
import Button from "../components/UI/Button";
export default function Login() {
  return (
    <div className="w-full h-screen bg-[url('/garment-background.jpg')] bg-cover">
      <MainHeader isLogInPage={true} checkLogIn={false} />
      <div className="mt-14 flex items-center justify-center ">
        <title>Sign In</title>
        <div className="bg-slate-100 shadow-md rounded px-6 pt-6 pb-8 mb-4">
          <h1 className="pb-4 text-2xl text-gray-500 text-center">Sign In</h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                id="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                defaultValue="admin@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                id="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-72 py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                defaultValue="123456"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Button
                className="bg-blue-500 text-center hover:bg-blue-700 w-72 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                to="/accounts"
              >
                Sign In
              </Button>
            </div>
            <div className="flex justify-end">
              <a
                className="mt-4 inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

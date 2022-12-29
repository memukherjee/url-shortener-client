import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-[100vh] relative bg-teal-700 flex justify-center items-center">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="url-form-container bg-transparent text-white border-4 border-current p-10 rounded-md w-full max-w-[500px]">
        <label
          className="block text-3xl font-mono mb-4 underline underline-offset-4"
          htmlFor="longUrlInput"
        >
          Shorten your Url
        </label>
        <Form />
      </div>

      <span
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-gray-400 font-normal"
      >&copy; memukherjee {new Date().getFullYear()}</span>
    </div>
  );
}

export default App;

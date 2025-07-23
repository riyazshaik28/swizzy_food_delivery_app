import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("Routing error:", err);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-2">OOPS!!!!!!!!!!!</h1>
      <h2 className="text-2xl text-gray-800 mb-4">Something went wrong 😢</h2>

      {err?.status || err?.statusText ? (
        <h3 className="text-lg text-gray-600">
          {err.status}: {err.statusText}
        </h3>
      ) : (
        <h3 className="text-lg text-gray-600">
          Unknown error. Please try again later.
        </h3>
      )}
    </div>
  );
};

export default Error;

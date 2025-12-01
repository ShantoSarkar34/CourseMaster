import { Link } from "react-router-dom";

const ErrorPage = ({ code = "404", message = "Page Not Found" }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Error Code */}
      <h1
        className="text-9xl md:text-[12rem] font-bold mb-6"
        style={{ color: "var(--color-primary)" }}
      >
        {code}
      </h1>

      {/* Heading */}
      <h2
        className="text-3xl md:text-5xl font-semibold mb-4"
        style={{ color: "var(--color-darkText)" }}
      >
        {message}
      </h2>

      {/* Paragraph */}
      <p
        className="text-md md:text-lg mb-8 max-w-xl"
        style={{ color: "var(--color-midText)" }}
      >
        Oops! The page you are looking for does not exist or has been moved.
        Click the button below to go back to the homepage and continue exploring
        our courses.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-8 py-4 rounded-lg font-semibold"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-background)",
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;

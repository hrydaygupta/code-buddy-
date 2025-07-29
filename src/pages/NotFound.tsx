import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-black via-red-900 to-blue-900">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      </div>
    </>
  );
}

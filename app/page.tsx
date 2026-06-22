export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-800">
          Love Fills Memory
        </h1>

        <p className="mt-4 text-gray-600">
          A memory care journal for family stories, moments, and love.
        </p>

        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Start Writing
        </button>
      </div>
    </div>
  );
}
export default function Write() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Write Memory</h1>

      <input
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="Title"
      />

      <textarea
        className="w-full border rounded-lg p-3 h-40"
        placeholder="What happened today?"
      />

      <button className="mt-4 px-5 py-2 bg-black text-white rounded-lg">
        Save Memory
      </button>
    </div>
  );
}
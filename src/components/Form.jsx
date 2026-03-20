import { useState } from "react";

const Form = ({ setUserData }) => {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const imageUrl = URL.createObjectURL(files[0]);
      setForm({ ...form, image: imageUrl });
      setUserData({ ...form, image: imageUrl });
    } else {
      setForm({ ...form, [name]: value });
      setUserData({ ...form, [name]: value });
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Create Your Eid Card ✨
      </h2>

      {/* Name Input */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          onChange={handleChange}
        />
      </div>

      {/* Designation */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Designation
        </label>
        <input
          type="text"
          name="designation"
          placeholder="Enter your role"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          onChange={handleChange}
        />
      </div>

      {/* Image Upload */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Upload Your Image
        </label>

        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 transition">
          <span className="text-gray-500 text-sm">
            Click to upload or drag image
          </span>
          <input
            type="file"
            name="image"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Preview small */}
      {form.image && (
        <div className="flex items-center gap-3 mt-4">
          <img
            src={form.image}
            alt="preview"
            className="w-12 h-12 rounded-full object-cover border"
          />
          <p className="text-sm text-gray-600">Image Selected</p>
        </div>
      )}
    </div>
  );
};

export default Form;
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
      setForm({ ...form, image: URL.createObjectURL(files[0]) });
      setUserData({ ...form, image: URL.createObjectURL(files[0]) });
    } else {
      setForm({ ...form, [name]: value });
      setUserData({ ...form, [name]: value });
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <input
        type="text"
        name="designation"
        placeholder="Your Designation"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <input
        type="file"
        name="image"
        className="w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;

const PreviewCard = ({ userData }) => {
  return (
    <div
      id="card"
      className=" text-white p-6 rounded-xl text-center"
       style={{
    background: "linear-gradient(to right, #16a34a, #4ade80)",
  }}
    >
      <h2 className="text-2xl font-bold mb-4">🌙 Eid Mubarak 🌙</h2>

      {userData.image && (
        <img
          src={userData.image}
          alt="user"
          className="w-24 h-24 mx-auto rounded-full border-4 border-white mb-4"
        />
      )}

      <p className="text-lg mb-2">
        May this Eid bring happiness and peace to your life.
      </p>

      <h3 className="text-xl font-semibold mt-4">
        {userData.name || "Your Name"}
      </h3>

      <p>{userData.designation || "Your Designation"}</p>
    </div>
  );
};

export default PreviewCard;

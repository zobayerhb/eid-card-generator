import { useState } from "react";
import Form from "./components/Form";
import PreviewCard from "./components/PreviewCard";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    designation: "",
    image: null,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Eid Card Generator
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Form setUserData={setUserData} />
        <div>
          <PreviewCard userData={userData} />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

export default App;

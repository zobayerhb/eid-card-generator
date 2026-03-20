import html2canvas from "html2canvas";

const DownloadButton = () => {
  const handleDownload = () => {
    const card = document.getElementById("card");

    html2canvas(card, {
      useCORS: true,
      scale: 2, // high quality
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "eid-card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
    >
      Download Card
    </button>
  );
};

export default DownloadButton;

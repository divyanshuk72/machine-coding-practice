import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PhotoAlbum = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/photos";

  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getThumbnailsByAlbum = (albumId) => {
    return result.filter((album) => album.albumId === albumId);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div className="text-center text-white">Error: {error}</div>;
  }

  return (
    <>
      <h1 className="text-white text-center my-8 text-4xl">Albums</h1>

      <div className="flex justify-evenly flex-wrap items-center gap-3 mx-10 my-10">
        {Object.keys(
          result.reduce(function (acc, curr) {
            if (acc[curr.albumId]) {
              acc[curr.albumId] += 1;
            } else {
              acc[curr.albumId] = 1;
            }
            return acc;
          }, {})
        )
          .slice(0, 14)
          .map((albumId) => (
            <div key={albumId}>
              <button
                className="px-4 py-2 bg-customRed border-none rounded-lg my-1 text-white text-lg cursor-pointer min-w-[140px]"
                onClick={() => setSelectedAlbumId(parseInt(albumId))}
              >
                Album {albumId}
              </button>
            </div>
          ))}
      </div>

      {selectedAlbumId && (
        <div className="my-10">
          <h2 className="text-white my-5 text-2xl text-center">
            Thumbnails for Album {selectedAlbumId}
          </h2>
          <div className="flex gap-3 flex-wrap justify-evenly items-center">
            {getThumbnailsByAlbum(selectedAlbumId).map((album) => (
              <div key={album.id}>
                <img
                  src={album.thumbnailUrl}
                  alt={album.title}
                  onClick={() => {
                    setSelectedImage(album.url);
                    handleOpen();
                  }}
                  className="cursor-pointer"
                />
                <p className="pl-16 text-white">{album.id}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white p-5 border-2 border-black rounded-lg shadow-lg w-[660px]">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}

      <div className="text-center my-5">
        <button
          className="px-4 py-2 bg-customRed border-none rounded-lg text-white text-lg cursor-pointer min-w-[140px]"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default PhotoAlbum;

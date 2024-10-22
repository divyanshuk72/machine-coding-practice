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

  // Function to filter album items based on albumId
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
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center", margin: "32px" }}>
        Albums
      </h1>
      {/* Display album titles */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "10px",
          margin: "40px",
        }}
      >
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
          .slice(0, 16)
          .map((albumId) => (
            <div key={albumId}>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#cc4141",
                  border: "none",
                  borderRadius: "10px",
                  margin: "5px",
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                  minWidth: "140px",
                }}
                onClick={() => setSelectedAlbumId(parseInt(albumId))}
              >
                Album {albumId}
              </button>
            </div>
          ))}
      </div>

      {/* Display thumbnails for the selected album */}
      {selectedAlbumId && (
        <div style={{ margin: "40px" }}>
          <h2 style={{ color: "white", margin: "20px" }}>
            Thumbnails for Album {selectedAlbumId}
          </h2>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {getThumbnailsByAlbum(selectedAlbumId).map((album) => (
              <div key={album.id}>
                <img
                  src={album.thumbnailUrl}
                  alt={album.title}
                  onClick={() => {
                    setSelectedImage(album.url);
                    handleOpen();
                  }}
                />
                <p style={{ paddingLeft: "65px", color: "white" }}>
                  {album.id}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {open && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "white",
              height: "auto",
              width: "660px",
              margin: "auto",
              padding: "2%",
              border: "2px solid #000",
              borderRadius: "10px",
              boxShadow: "2px solid black",
            }}
          >
            <img src={selectedImage} alt="image" />
          </div>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#cc4141",
            border: "none",
            borderRadius: "10px",
            margin: "10px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            minWidth: "140px",
          }}
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default PhotoAlbum;

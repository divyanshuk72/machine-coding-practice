import { useEffect, useState } from "react";
import FilledStar from "../assets/filledStar.svg";
import { useNavigate } from "react-router-dom";

const LoadMoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [isDisable, setIsDisable] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let data = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      let response = await data.json();
      if (response && response.products && response.products.length) {
        setProducts((prevData) => [...prevData, ...response.products]);
        setLoading(false);
      }
    } catch (err) {
      console.error(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setIsDisable(true);
  }, [products]);

  const navigate = useNavigate();

  if (loading)
    return (
      <div style={{ textAlign: "center", color: "white", margin: "20px" }}>
        Loading data....
      </div>
    );

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white", margin: "30px" }}>Products</h1>
        <div
          style={{
            margin: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {products && products.length
            ? products.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      style={{
                        color: "white",
                        borderRadius: "10px",
                        width: "250px",
                        height: "350px",
                        backgroundColor: "#cc4141",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        gap: "20px",
                        padding: "20px",
                      }}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        width={150}
                        style={{ borderRadius: "10px" }}
                      />
                      <span style={{ backgroundColor: "#cc4141" }}>
                        {item.title}
                      </span>
                      <span style={{ backgroundColor: "#cc4141" }}>
                        ${item.price}
                      </span>
                      <span style={{ backgroundColor: "#cc4141" }}>
                        {item.rating}{" "}
                        <img
                          style={{ backgroundColor: "#cc4141" }}
                          src={FilledStar}
                          alt="star"
                          width={15}
                        />
                      </span>
                    </div>
                  </>
                );
              })
            : null}
        </div>

        {isDisable ? (
          <div style={{ margin: "30px" }}>
            <span style={{ color: "white" }}>
              You have reached 100 products !!
            </span>
          </div>
        ) : (
          <button
            style={{
              padding: "10px",
              margin: "30px",
              backgroundColor: "#cc4141",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => {
              setCount(count + 1);
            }}
            disabled={isDisable}
          >
            Load more products
          </button>
        )}
        <button
          style={{
            padding: "10px",
            margin: "30px",
            backgroundColor: "#cc4141",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default LoadMoreProducts;

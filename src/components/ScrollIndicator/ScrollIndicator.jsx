import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ScrollIndicator = () => {
  const API_URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchProducts = async (url) => {
    try {
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  };

  useEffect(() => {
    fetchProducts(API_URL);
  }, [API_URL]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const navigate = useNavigate();

  if (loading)
    return (
      <div className="text-center text-white m-[20px]">Loading data....</div>
    );

  if (errorMsg.length > 0)
    return <div className="text-center text-white m-[20px]">{errorMsg}</div>;

  return (
    <>
      <div className="text-center m-[50px]">
        <h1 className="text-white text-4xl m-[30px]">Scroll Indicator</h1>
        <div className="fixed top-0 left-0 w-full bg-gray-200 h-[10px]">
          <div
            style={{ width: `${scrollPercentage}%` }}
            className="h-full bg-red-500 transition-all duration-100"
          ></div>
        </div>
        <div className="m-[20px] flex justify-center items-center gap-[30px] flex-wrap">
          {products && products.length
            ? products.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="text-white rounded-md w-[250px] h-[350px] bg-customRed flex flex-col justify-evenly items-center gap-[10px] p-[20px]"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        width={150}
                        className="rounded-md"
                      />
                      <span className="bg-customRed">{item.title}</span>
                      <span className="bg-customRed">${item.price}</span>
                    </div>
                  </>
                );
              })
            : null}
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="p-2 bg-red-500 border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ScrollIndicator;

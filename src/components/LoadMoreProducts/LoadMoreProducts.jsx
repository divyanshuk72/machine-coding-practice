import { useEffect, useState } from "react";
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
      <div className="text-center text-white m-[20px]">Loading data....</div>
    );

  return (
    <>
      <div className="text-center">
        <h1 className="text-white m-[30px] text-4xl">Products</h1>
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

        {isDisable ? (
          <div className="m-[30px]">
            <span className="text-white">You have reached 100 products !!</span>
          </div>
        ) : (
          <button
            className="p-[10px] m-[30px] bg-customRed border-none rounded-md text-white text-[16px] cursor-pointer"
            onClick={() => {
              setCount(count + 1);
            }}
            disabled={isDisable}
          >
            Load more products
          </button>
        )}
        <button
          className="p-[10px] m-[30px] bg-customRed border-none rounded-md text-white text-[16px] cursor-pointer"
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

const Square = ({ value, index, handleValue }) => {
  return (
    <>
      <div
        className="border rounded-md border-white p-12 cursor-pointer w-[120px] h-[120px] text-2xl"
        onClick={handleValue}
      >
        {value[index]}
      </div>
    </>
  );
};

export default Square;

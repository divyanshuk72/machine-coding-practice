import { useState } from "react";
import { menus } from "../../constants/TreeViewData";
import { useNavigate } from "react-router-dom";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="list-none text-white flex flex-col gap-5 justify-center bg-customRed rounded-2xl p-8 m-[30px]">
      {list && list.length
        ? list.map((item, index) => {
            return <MenuItem key={index} item={item} />;
          })
        : null}
    </ul>
  );
};

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  return (
    <li className="text-2xl bg-customRed flex gap-2">
      <span className="bg-customRed">{item.label}</span>
      {item.children && (
        <span
          className="cursor-pointer bg-customRed"
          onClick={() => {
            handleToggleChildren(item.label);
          }}
        >
          {displayCurrentChildren[item.label] ? "-" : "+"}
        </span>
      )}
      {displayCurrentChildren[item.label] && <MenuList list={item.children} />}
    </li>
  );
};

const TreeView = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center my-12">
      <h1 className="text-white my-8 text-4xl">Tree View</h1>
      <MenuList list={menus} />
      <button
        className="px-4 py-2 bg-customRed rounded-lg my-5 text-white text-lg cursor-pointer min-w-[140px]"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default TreeView;

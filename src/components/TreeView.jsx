import { useState } from "react";
import { menus } from "../constants/TreeViewData";
import { useNavigate } from "react-router-dom";

const MenuList = ({ list = [] }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        backgroundColor: "#cc4141",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
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
    <li
      style={{
        fontSize: "24px",
        backgroundColor: "#cc4141",
        display: "flex",
        gap: "10px",
      }}
    >
      <span style={{ backgroundColor: "#cc4141" }}>{item.label}</span>
      {item.children && (
        <span
          style={{ cursor: "pointer", backgroundColor: "#cc4141" }}
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
    <>
      <div
        style={{
          textAlign: "center",
          margin: "50px",
        }}
      >
        <h1 style={{ color: "white", margin: "30px" }}>Tree View</h1>
        <MenuList list={menus} />
        <button
          style={{
            padding: "10px",
            backgroundColor: "#cc4141",
            border: "none",
            borderRadius: "10px",
            margin: "20px",
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

export default TreeView;

import React from "react";

export function CategoryItem(props) {
  console.log("category item", props);
  return (
    <div>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => props.setSelectedCategoryItem(props.categoryItem)}
      >
        {props?.categoryItem?.points}
      </button>
    </div>
  );
}

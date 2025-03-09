import React from "react";
import { CategoryItem } from "./categoryItem";

export function CategoryColumn(props) {
  console.log("category column", props);
  return (
    <div
      style={{
        background: "#123456",
        minWidth: "40px",
        minHeight: "40px",
        margin: "20px",
        flex: "1 1 0px",
        alignItems: "stretch",
      }}
    >
      <h1>
        {props?.item?.category
          ? props.item.category
          : "Kategorie nicht definiert"}
      </h1>
      {props?.item?.questionset.map((item) => {
        return (
          <CategoryItem
            categoryItem={item}
            setSelectedCategoryItem={props.setSelectedCategoryItem}
          />
        );
      })}
    </div>
  );
}

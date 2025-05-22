import React from "react";
import { CategoryItem } from "./categoryItem";

export function CategoryColumn(props) {
  const catItems = props?.item || [];
  const category = catItems[catItems.length - 1];
  const questionset = catItems.slice(0, -1);

  return (
    <div
      style={{
        minWidth: "40px",
        minHeight: "40px",
        margin: "20px",
        flex: "1 1 0px",
        alignItems: "stretch",
      }}
    >
      <h1>{category ? props.item.category : "Kategorie nicht definiert"}</h1>
      {questionset.map((item, index) => {
        return (
          <CategoryItem
            key={category + item.question}
            categoryItem={item}
            setSelectedCategoryItem={props.setSelectedCategoryItem}
          />
        );
      })}
    </div>
  );
}

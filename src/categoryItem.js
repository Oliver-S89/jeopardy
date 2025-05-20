import React from "react";

export function CategoryItem(props) {
  const isAnswered = props?.categoryItem?.answeredCorretly != null;
  // console.log("category item", props.categoryItem.answeredCorretly, isAnswered);
  return (
    <div>
      {!isAnswered ? (
        <button
          className="question-element"
          onClick={() => props.setSelectedCategoryItem(props.categoryItem)}
        >
          {props?.categoryItem?.points}
        </button>
      ) : (
        <button
          className={`question-element is-answered ${
            props?.categoryItem?.answeredCorretly ? "correct" : "uncorrect"
          }`}
        >
          {props?.categoryItem?.points}
        </button>
      )}
    </div>
  );
}

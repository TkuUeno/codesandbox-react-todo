import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  const style = {
    display: "flex",
    alignItems: "center",
    paddingBottom: "4px"
  };

  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} style={style}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

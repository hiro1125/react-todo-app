import React from "react";

export const IncompleteTodo = ({Todo, onClickComplete, onClickDelete, todoEdit, onChange, onClickEdit}) => {
  // const {Todo, onClickComplete, onClickDelete, todoEdit, onChange, onClickEdit} = props;
  return (
    <div className="incomplete-area">
    <p className="title">未完了のTODO</p>
    <ul>
      {Todo.map((todo,index) => {
        return(
      <li key={todo} className="list-row">
        <p>{todo}</p>
          <button onClick={() => onClickComplete(index)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
          <div className="compilation-area">
                  <input placeholder="TODOを編集する" defaultValue={todoEdit} onChange={onChange} />
                  <div className="edit-area">
                    <button onClick={() => onClickEdit(index)}>内容を変更する</button>
                  </div>
                </div>
      </li>
        );
      })}
    </ul>
  </div>
  )
};

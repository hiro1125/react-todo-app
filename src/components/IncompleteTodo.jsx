import React, {useState} from "react";

export const IncompleteTodo = ({Todo, onClickComplete, onClickDelete, onChange}) => {
 const [refresh, setRefresh] = useState(false);

 const onChanges = (id, input) => {
   Todo.map((todo) => {
     if (todo.id === id) {
       todo.todoText = input;
       onChange(todo);
     }
   });
 };
 const Editable = (id) => {
   Todo.map((todo) => {
     if (todo.id === id) {
       todo.check = true;
       setRefresh(refresh ? false : true);
     }
   });
 };
 
 const onClickEdit = (id, input) => {
   Todo.map((todo) => {
     if (todo.id === id) {
       if (input === "") {
         alert("テキストを入力してください");
       } else {
         todo.check = false;
         setRefresh(refresh ? false : true);
       }
     }
   });
 };



  return (
    <div className="incomplete-area">
    <p className="title">未完了のTODO</p>
    <ul>
      {Todo.map((todo,index) =>{
        return(
      <li className="list-row" key={todo.id} >
        {!todo.check ? (
          <>
        <p>{todo.todoText}</p>
          <button onClick={() => onClickComplete(index)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
          <button onClick={() => Editable(todo.id)}>編集</button>
          </>
        ) : (
          <div className="compilation-area" key={todo.id} >
            <input placeholder="TODOを編集する"  value={todo.todoText} onChange={(event)=> onChanges(todo.id, event.target.value)} />
          <div className="edit-area">
            <button onClick={() => onClickEdit(todo.id, todo.todoText)} > 内容を変更する </button>
            </div>
          </div>
        )}
      </li>
        );
      })}
    </ul>
  </div>
  )
};

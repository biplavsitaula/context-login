import { useContext, useEffect } from "react";
import { AppContext } from "./AppContex";

const PostList = () => {
  const { authUser, todoList, setTodoList } = useContext(AppContext);


  useEffect(() => {
    fetch(`https://dummyjson.com/posts/user/${authUser?.id}`)
      .then((res) => res.json())
      .then((post) => {
        setTodoList(post);
      });
  }, [authUser]);
  return (
    <>
      {todoList && (
        <div>
          {todoList?.posts?.map((todos) => (
            <p key={todos.id}>{todos.title}</p>
          ))}
        </div>
      )}{" "}
    </>
  );
};
export default PostList;

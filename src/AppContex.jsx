import { createContext,  useEffect,  useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState();
  const [crrUser, setCrrUser] = useState();
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState();
  const [postRes, setPostRes] = useState(false);
  const [loading, setLoading]=useState(false)
 
  useEffect(() => {
    if(window.localStorage.getItem('token')){
      setLoading(true)
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((user) => {
          setAuthUser(user)
          setCrrUser(user)
          setLoading(false)
        });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        username,
        setUsername,
        password,
        setPassword,
        authUser,
        setAuthUser,
        crrUser,
        setCrrUser,
        todo,
        setTodo,
        todoList,
        setTodoList,
        postRes,
        setPostRes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

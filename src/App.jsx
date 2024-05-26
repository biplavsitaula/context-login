import { useContext } from "react";
import { AppContext } from "./AppContex";
import { Link } from "react-router-dom";

function App() {
  const {
    loading,
    username,
    setUsername,
    password,
    setPassword,
    authUser,
    setAuthUser,
    todo,
    setTodo,
    postRes,
    setPostRes,
  } = useContext(AppContext);

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        setAuthUser(user);
        window.localStorage.setItem("token", user.token);
      });
  };

  const postTodo = () => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: todo,
        userId: authUser.id,
      }),
    })
      .then((res) => res.json())
      .then(setPostRes(true));
  };

  const logout = () => {
    setAuthUser();
    window.localStorage.removeItem("token");
  };

  return (
    <>
    {loading && <p>Loading...</p> }
      {(!authUser && !loading) && (
        <>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </>
      )}
      {(authUser && !loading) && (
        <div>
          <p>Welcome, {authUser.username}</p>
          <Link to="/myinfo">Get my info</Link>
          <br />
          <Link to="/mypost">Get my post</Link>

          <br />
          <input
            type="text"
            onChange={(e) => {
              setPostRes(false);
              setTodo(e.target.value);
            }}
          />
          <button type="submit" onClick={postTodo}>
            Submit
          </button>
          <br />
          {postRes && (
            <span>
              <code>Posted:</code>'{todo}' to todo list.
            </span>
          )}
          <br />

          <button type="submit" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default App;

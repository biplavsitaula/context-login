import { useContext, useEffect } from "react";
import { AppContext } from "./AppContex";

const Info = () => {
  const { crrUser,setCrrUser } = useContext(AppContext);
  useEffect(() => {
    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((user) => setCrrUser(user));
  }, []);

  return (
    <>
      {crrUser && (
        <>
          <p>{crrUser?.firstName}</p>
          <p>{crrUser?.eyeColor}</p>
          <p>{crrUser?.bloodGroup}</p>
          <p>{crrUser?.birthDate}</p>
        </>
      )}
    </>
  );
};
export default Info;

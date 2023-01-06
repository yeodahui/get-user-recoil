import "./App.css";
import React from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "./userState";

function App() {
  const user = useRecoilValue(userAtom);

  return (
    <div className="App">
      <div className="user">
        <React.Suspense fallback={"loading..."}>
          <img
            src={`${user.picture.large}`}
            alt="profile"
            className="user-img"
            loading="lazy"
          />
          <strong className="user-name">
            {user.name.first + " " + user.name.last}
          </strong>
          <span className="user-email">{user.email}</span>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;

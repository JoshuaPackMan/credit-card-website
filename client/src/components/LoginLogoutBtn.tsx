import React from "react";

interface LoginLogoutBtnProps {
  handleClick: () => void;
  text: string;
}

export const LoginLogoutBtn: React.FC<LoginLogoutBtnProps> = (props) => {
  return (
    <div className="buttons">
      <button className="button is-info" onClick={props.handleClick}>
        <strong>{props.text}</strong>
      </button>
    </div>
  );
};

import React, { useState } from "react";
import { UserModel } from "../Models/UserModel";

interface IProps {
  target: EventTarget & HTMLInputElement;
}

export default function useLogOrSignIn() {
  const [user, setUser] = useState<UserModel>({
    user_name: "",
    user_email: "",
    user_password: "",
    repeatUserPassword: "",
  });

  function handleInputChange({ target }: IProps) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }
  return [user, handleInputChange];
}

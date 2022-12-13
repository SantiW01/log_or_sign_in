export interface UserModel {
  user_name: string;
  user_email?: string;
  user_password: string;
  repeatUserPassword?: string;
}

export type UserType = {
  user: UserModel;
  userLogIn?: () => {};
  userSignIn?: () => {};
};

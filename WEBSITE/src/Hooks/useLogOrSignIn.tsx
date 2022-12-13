import { useState } from "react";
interface IProps {
  target: EventTarget & HTMLInputElement;
}
export const useForm = (initialState: any = []) => {
  const [formState, setFormState] = useState<any>(initialState);

  const handleInputChange = ({ target }: IProps) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  const resetForm = () => {
    setFormState(initialState);
  };

  return [formState, handleInputChange, resetForm];
};

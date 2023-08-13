import React from "react";

const InputText = (props) => {
  const { type, placeholder, id, register, disabled, onInput } = props;
  return (
    <>
      <input
        disabled={disabled ?? false}
        {...register}
        type={type ?? "text"}
        class="form-control"
        id={id ?? "input"}
        placeholder={placeholder ?? ""}
        onInput={onInput}
      />
    </>
  );
};

export default InputText;

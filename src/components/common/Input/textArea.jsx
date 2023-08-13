import React from "react";

const TextArea = (props) => {
  const { placeholder, id, register, disabled, onInput, rows } = props;
  return (
    <textarea
      disabled={disabled ?? false}
      {...register}
      class="form-control"
      id={id ?? "textarea"}
      placeholder={placeholder ?? ""}
      onInput={onInput}
      rows={rows ?? 3}
    />
  );
};

export default TextArea;

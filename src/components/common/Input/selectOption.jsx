import React from "react";

const SelectOption = (props) => {
  const { id, register, listOption, onInput, disabled } = props;
  return (
    <>
      <select
        class="form-select"
        {...register}
        disabled={disabled ?? false}
        onInput={onInput}
      >
        {listOption.map((row, key) => (
          <option value={row.value} key={key}>
            {row.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;

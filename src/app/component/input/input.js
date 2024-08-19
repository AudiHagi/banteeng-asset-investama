import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import "./input.css";

export default function Input({
  value,
  label,
  style,
  backgroundColor,
  placeholder,
  onChange,
  type,
  disabled,
  onBlur,
  desk,
  color = "gray",
  onKeyDown,
  id,
}) {
  return (
    <div>
      <FloatingLabel
        controlId="floatingPassword"
        label={label}
        style={{ color: "gray", borderColor: color }}
      >
        <Form.Control
          onInput={(event) => {
            // console.log(event.nativeEvent)
            if (type == "number") {
              if (
                event.nativeEvent.data !== "e" &&
                event.nativeEvent.data !== "E"
              ) {
                event.target.value = event.target.value.replace(/[eE]/g, "");
              } else {
                console.log(value);
                event.target.value = value;
              }
            }
          }}
          className="text-des"
          id={id}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          disabled={disabled}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      </FloatingLabel>
    </div>
  );
}

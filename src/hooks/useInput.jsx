import { useState, useEffect, useRef } from "react";

function useInput() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus);
        inputElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    isFocused,
    setIsFocused,
    onChange: handleChange,
    inputRef,
  };
}

export default useInput;
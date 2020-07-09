import React, { useState } from "react";


function CreditCardInput(props) {
  const [number, updateNumber] = useState("");

  const process = newNumber => {
    let type = checkType(newNumber);
    let text = insertSpaces(newNumber);
    text = text.trim();
    return { text, type };
  }

  const handleChange = e =>  {
    let newValue = e.target.value;
    let newNumber = filterWhitespace(newValue);
    updateNumber(newNumber);
  }

  const filterWhitespace = text => text.replace(/\s/g, "");
  const insertSpaces = text => text.replace(/(.{4})/g, "$1 ");

  const checkType = text => {
    const types = props.types;
    for (var type in types) {
      if (text.match(types[type])) {
        return type;
      }
    }
    return "";
  }

  const { text, type } = process(number);

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <input type="text" value={type} readOnly />
    </div>
  );
}

export default CreditCardInput;

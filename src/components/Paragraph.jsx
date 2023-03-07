import React, { useState } from "react";

const Paragraph = (props) => {
  const [paragraph, setParagraph] = useState("");

  const Paragraf = (e) => {
    setParagraph(e.target.value);
  };

  const Parag = () => {
    if (!paragraph) {
      alert("Запоните поле!!!");
      return;
    }

    const newParagraph = {
      paragraph: paragraph,
      status: false,
      id: Date.now(),
    };
    console.log(newParagraph);

    props.handleParagraph(newParagraph);

    setParagraph("");
  };

  return (
    <div className="paragraph">
      <h2>Paragraph</h2>
      <input value={paragraph} type="text" onChange={Paragraf} />
      <button onClick={Parag}>Click</button>
      {props.paragr.map((item) => (
        <p className="p" key={item.id}>
          {item.paragraph}
        </p>
      ))}
    </div>
  );
};

export default Paragraph;

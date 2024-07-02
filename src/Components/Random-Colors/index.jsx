/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function RandomColors() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb (${r},${g},${b})`);
  }

  //   lets use useEffect init

  useEffect(() => {
    if (typeOfColor == "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontStyle: "italic",
          fontSize: "70px",
          marginBottom: "25px",
        }}
      >
        Random Colors App
      </h1>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "white",
            fontWeight: "bold",
          }}
        >
          <button onClick={() => setTypeOfColor("hex")}>
            Create Hex Color
          </button>
          <button onClick={() => setTypeOfColor("rgb")}>
            Create RGB Color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
          >
            Generate Random Color
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color " : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
      <hr
        style={{
          marginTop: "5%",
          display: "block",
          content: "",
          width: "100%",
          height: "2px",
          background: "black",
          gap: "30%",
        }}
      />
    </>
  );
}

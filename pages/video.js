import React, { useContext } from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";

export default function Video() {
  const contexto = useContext(ColorModeContext);

  return (
    <div>
      <div>Video!</div>
      <div>{contexto.mode}</div>
      <button onClick={() => contexto.toggleMode()}>Trocar modo</button>
    </div>
  );
}

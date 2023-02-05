import React, { useContext } from "react";
import { Context } from "../../../store/context";
import { useTheme } from "@emotion/react";
import "./toggle.scss";

export const Toggle = () => {
  const { state, dispatch } = useContext(Context);
  const theme = useTheme();
  const stateChange = state.isDark ? theme.dark.font : theme.light.font;
  const toggleContainer = "toggle-container";
  return (
    <div className={stateChange && toggleContainer}>
      <span style={{ color: state.isDark ? "grey" : "yellow" }} role="img">
        ☀︎
      </span>
      <span className="toggle">
        <input
          type="checkbox"
          name="checkbox"
          id="day-night"
          className="day-night-switch"
          onChange={() => dispatch({ type: "TOGGLE_DARK" })}
          checked={state.isDark}
        />
        {/* Below comment removes jsx label warning  */}
        <>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        </>
        <label htmlFor="day-night-switch" />
      </span>
      <span style={{ color: state.isDark ? "slateblue" : "grey" }} role="img">
        ☾
      </span>
    </div>
  );
};

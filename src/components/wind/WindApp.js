import UserInput from "./UserInput";
import "./WindCalc.css";
import Calc_start from "./Calc_start";
import { useState } from "react";

function WindApp(props) {
  const [display, setDisplay] = useState(true);

  const goToCalc = (direct) => {
    setDisplay(direct);
  };

  const button_return = (return_button_prop) => {
    setDisplay(return_button_prop);
  };

  return (
    <div>
      {display ? (
        <Calc_start goToCalc={goToCalc} />
      ) : (
        <UserInput button_return={button_return} />
      )}
    </div>
  );
}
export default WindApp;

import { memo,useContext } from "react";
import {WarpperContext} from "./Header"
const Warpper=({hide})=>{
    const value = useContext(WarpperContext);
     const unShow = () => {
       hide(!value);
     };
    return (
      <div
        onClick={unShow}
        className="position-fixed start-0 end-0 bottom-0 top-0 "
        style={{ background: "rgba(0, 0, 0, .53)",opacity:"1",zIndex:"10" }}
      ></div>
    );
}
export default memo(Warpper); 
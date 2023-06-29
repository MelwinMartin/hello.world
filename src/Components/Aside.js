import { useSelector,useDispatch } from "react-redux";
import randomColor from "randomcolor";
import{ change_color} from "../Redux/color/ColorSlice"
function Aside() {
 const changeColor=()=>{
  dispatch(change_color({
    color:randomColor()
  }))
 }

  const color = useSelector(state=>state.color.value)
 const dispatch=useDispatch()
  return (
    <div className="aside">
      <h2 style={{ color }}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;

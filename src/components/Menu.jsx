import { NavLink } from "react-router-dom";
import '../App.css'
export default function Menu() {
  return (
    <><div className = "menu">
      <NavLink to = "/map"><img className="map-icon"src = "https://loolooloo.vercel.app/map-icon.png"></img></NavLink>
      <NavLink to = "/waterlog"><img className="waterlog-icon"src = "https://loolooloo.vercel.app/waterlog-icon.png"></img></NavLink>
      </div>
    </>
  );
}

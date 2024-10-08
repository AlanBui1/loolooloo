import { NavLink } from "react-router-dom";
import '../App.css'
export default function Menu() {
  return (
    <><div className = "menu">
      <NavLink to = "/dashboard"><img className="map-icon"src = "https://alanbui.ca/assets/images/hackthenorth/map-icon.png"></img></NavLink>
      <NavLink to = "/map?latitude=43.47322898671156&longitude=80.53978074181718&floorId=m_a93a33b76d3261c5"><img className="loo-icon"src = "https://alanbui.ca/assets/images/hackthenorth/loo.png"></img></NavLink>
      <NavLink to = "/waterlog"><img className="waterlog-icon"src = "https://alanbui.ca/assets/images/hackthenorth/waterlog-icon.png"></img></NavLink>
      </div>
    </>
  );
}

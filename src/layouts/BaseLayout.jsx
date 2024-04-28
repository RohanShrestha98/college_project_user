import MainHeader from "../components/MainHeader";
import TopHeader from "../components/TopHeader";
import {Outlet} from "react-router-dom"

export default function BaseLayout() {
  return <div>
     <TopHeader />
      <MainHeader />
      <Outlet/>
  </div>;
}

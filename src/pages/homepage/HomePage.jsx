import BestDeals from "./BestDeals";
import HomeAboutCard from "./HomeAboutCard";
import HomeSlider from "./HomeSlider";
import ShopWithCategories from "./ShopWithCategories";

export default function HomePage() {
  return (
    <div className="w-[100%] overflow-hidden">
      {/* <div className="base_layout"> */}
        <HomeSlider/>
      {/* </div> */}
      <HomeAboutCard />
      <div className="base_padding">
        
      <BestDeals />
      </div>
      <ShopWithCategories />
    </div>
  );
}

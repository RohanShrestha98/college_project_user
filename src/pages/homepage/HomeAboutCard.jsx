import { BsBoxSeam } from "react-icons/bs";
import { PiTrophyLight } from "react-icons/pi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function HomeAboutCard() {
  const aboutUs = [
    {
      id: 1,
      name: "Fasted Delivery",
      desc: "Delivery in 24/H",
      icon: <BsBoxSeam />,
    },
    {
      id: 2,
      name: "24 Hours Return",
      desc: "100% money-back guarantee",
      icon: <PiTrophyLight />,
    },
    {
      id: 3,
      name: "Secure Payment",
      desc: "Your money is safe",
      icon: <CiMoneyCheck1 />,
    },
    {
      id: 4,
      name: "Support 24/7",
      desc: "Live contact/message",
      icon: <TfiHeadphoneAlt />,
    },
  ];
  return (
    <div className="base_layout py-4">
      <div className="base_padding grid border grid-cols-4">
        {aboutUs?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex items-center border-l first:border-none my-4 px-4  gap-4"
            >
              <div className="text-3xl text-gray-700">{item?.icon}</div>
              <div className="flex flex-col justify-center">
                <h1 className="uppercase text-gray-900 font-semibold text-sm">
                  {item?.name}
                </h1>
                <p className="text-sm text-gray-500 ">{item?.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

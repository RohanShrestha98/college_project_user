import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function TopHeader() {
  const socialMedia = [
    {
      id: 1,
      link: "",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "",
      icon: <FaInstagram />,
    },
    {
      id: 4,
      link: "",
      icon: <FaYoutube />,
    },
  ];
  return (
    <div className="bg-[#1B6392] base_layout py-2 border-b border-gray-400">
      <div className="base_padding flex justify-between text-white items-center">
        <p className="text-sm font-normal">
          Welcome to Clicon online eCommerce store.{" "}
        </p>
        <div className="flex items-center gap-3">
          <p className="text-sm font-normal">Follow us :</p>
          <div className="flex items-center gap-2">
            {socialMedia?.map((item) => {
              return (
                <a
                  href={item?.link}
                  target="_blank"
                  className="text-white text-sm"
                  key={item?.id}
                >
                  {item?.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

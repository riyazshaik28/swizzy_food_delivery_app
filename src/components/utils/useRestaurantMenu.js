import { useEffect, useState } from "react";
import { CDN_FOIN, CDN_INFO } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${CDN_INFO}${resId}${CDN_FOIN}`);
      const json = await response.json();
      console.log(json);
      setResInfo(json?.data);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
    }
  };

  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;

import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

export const useQueryData = (key, path, params = "", enabled = true) => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: [key, params],
    queryFn: () =>
      axiosPrivate({
        url: path,
        method: "get",
        params: params,
      }).then((res) => res?.data && res?.data),
    enabled,
  });
};

export const useContactData = () => useQueryData(["contacts"], "api/contacts");
export const useAdminData = () => useQueryData(["admins"], "api/admins");
export const useAdminFilesData = () =>
  useQueryData(["admin-documemt"], "api/admins/all-files");
export const useShopData = () => useQueryData(["shop-approve"], "api/shop");
export const useCategoryData = () => useQueryData(["category"], "api/category/list");
export const useProductData = (id="",search="") => useQueryData(["product",id,search], `api/product/list/${id}?search=${search}`);
export const useTrackOrderData = () => useQueryData(["track-order"], "api/buy-product/track-order");

// import { useCallback, useEffect, useState } from "react";
// import { ServiceApi } from "../serviceApi";
// import { Item } from "../../types/item.types";

// export const useGetItems = (query: string) => {
//   const [items, setItems] = useState<Item[]>();

//   const fetchData = useCallback(async () => {
//     const api = ServiceApi.getInstance();
//     const items = await api.getItems(query);
//     setItems(items);
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return items;
// };


// export const useGetItem = (itemId: string) => {
//   const [item, setItem] = useState<Item>();

//   const fetchData = useCallback(async () => {
//     const api = ServiceApi.getInstance();
//     const item = await api.getItem(itemId);
//     const description = await api.getItemDescription(itemId);
//     item.description = description.plainText;

//     setItem(item);
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return item;
// };


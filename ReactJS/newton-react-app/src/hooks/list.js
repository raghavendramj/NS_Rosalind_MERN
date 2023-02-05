import { useEffect, useState } from "react";

export default function List({ items }) {
  const [fetchItems, setFetchItems] = useState([]);

  useEffect(() => {
    setFetchItems(items);
    console.log("Updating my items!");
  }, [items]);

  return fetchItems.map((item) => <div key={item}>{item}</div>);
}

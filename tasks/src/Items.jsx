import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";

const Items = () => {
  const { isPending, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch("/"),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }
  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;

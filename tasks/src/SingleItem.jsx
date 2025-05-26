import { useDeleteTask, useEditTask } from "./customReactQuery";

const SingleItem = ({ item }) => {
  const { editTask } = useEditTask();
  const { deleteTask, isPending } = useDeleteTask();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={isPending}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;

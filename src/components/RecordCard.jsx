import { AiOutlineDelete } from "react-icons/ai";

const RecordCard = ({ record, index, setRecord, records }) => {
  const hour = Math.floor(record / (3600 * 100));
  const min = Math.floor((record % 360000) / 6000);
  const sec = Math.floor((record % 6000) / 100);
  const msec = record % 100;

  const onClickDelete = () => {
    const array = records.filter((v, i) => {
      return i !== index;
    });
    setRecord(array);
  };

  return (
    <div className="flex my-4">
      <button className="relative">
        <div className="border-4 border-yellow-400 w-8 h-8 rounded-xl bg-yellow-400 p-2"></div>
        <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-yellow-400 p-2"></div>
      </button>
      <div className="text-2xl ml-4 truncate">
        {hour}:{min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}:{msec.toString().padStart(2, "0")}
      </div>
      <button
        className="ml-4 hover:text-sky-500 hover:scale-125 ease-linear duration-300"
        onClick={onClickDelete}
      >
        <AiOutlineDelete size={24} />
      </button>
    </div>
  );
};

export default RecordCard;

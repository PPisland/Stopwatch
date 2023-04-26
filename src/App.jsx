import { useEffect, useState } from "react";
import ReportCard from "./components/RecordCard";

function App() {
  const [time, setTime] = useState(0);
  // const [prvtime, setPrevTime] = useState(0);
  const [record, setRecord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [prvrecord, setPrevRecord] = useState([]);

  const hour = Math.floor(time / (3600 * 100));
  const min = Math.floor((time % 360000) / 6000);
  const sec = Math.floor((time % 6000) / 100);
  const msec = time % 100;
  // console.log(time);
  const onClickToggle = () => {
    setIsLoading(!isLoading);
  };

  const onClickReset = () => {
    if (!isLoading) {
      setTime(0);
    }
  };
  const onClickSave = () => {
    // const timetable = {}
    setRecord([...record, time]);
    // setPrevRecord([...prvrecord, prvtime]);
    // setPrevTime(0);
    // console.log(record);
  };

  useEffect(() => {
    if (isLoading) {
      let interverId = setInterval(() => {
        setTime(time + 1);
        // setPrevTime(prvtime + 1);
      }, 10);

      return () => {
        clearInterval(interverId);
      };
    }
  }, [time, isLoading]);

  return (
    <div className="min-h-screen bg-blue-500 text-white flex flex-col justify-start items-center">
      <div className="mt-16 text-4xl">
        {hour}:{min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}:{msec.toString().padStart(2, "0")}
      </div>
      <div className="mt-20 flex gap-36  ">
        {!isLoading ? (
          <button
            onClick={onClickToggle}
            className="w-20 h-16 bg-lime-500 hover:bg-lime-200"
          >
            Start
          </button>
        ) : (
          <button
            onClick={onClickToggle}
            className="w-20 h-16 bg-amber-400 hover:bg-amber-200"
          >
            Stop
          </button>
        )}
        {isLoading ? (
          <button
            onClick={onClickSave}
            className={`w-20 h-16 bg-pink-500  hover:bg-pink-200
            } `}
          >
            Save
          </button>
        ) : (
          <button
            onClick={onClickReset}
            className={`w-20 h-16 bg-orange-500  hover:bg-orange-200
            } `}
          >
            Reset
          </button>
        )}
      </div>
      <div className="text-2xl my-10">🚩 L A P 🚩</div>
      <div className="max-w-screen-md flex flex-col">
        <div className="flex text-2xl  border-b-2 pb-4">
          <div>구간</div>
          <div className="ml-8">구간 기록</div>
          <div className="ml-8">전체 시간</div>
        </div>
        {record &&
          record.map((v, i) => {
            return (
              <ReportCard
                key={i}
                record={v}
                index={i}
                records={record}
                setRecord={setRecord}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;

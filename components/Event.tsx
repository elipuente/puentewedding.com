import { FC, useState } from "react";

interface IEvent {
  description: string;
  event: string;
  location: string;
  time: string;
}

const Event: FC<IEvent> = ({ time, event, location, description }: IEvent) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-dusty-blue p-4 rounded-lg text-gray-100 dark:text-gray-100 dark:bg-gray-600 lg:w-96 cursor-pointer ${
        open && "transition-all shadow-lg"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold">{time}</p>
        <div>
          <h4>{event}</h4>
          <p className="italic">{location}</p>
        </div>
        <span
          className={`transition max-h-min duration-200 ${
            open && "rotate-180"
          }`}
        >
          &#9013;
        </span>
      </div>
      <div
        className={`transition ease-in-out duration-1000 mt-4 max-w-fit h-auto ${
          !open && "hidden"
        }`}
      >
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Event;

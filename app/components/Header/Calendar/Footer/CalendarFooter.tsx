import {useState} from "react";


const days: ([string, number])[] = [['±1 days', 1], ['±2 days', 2], ['±3 days', 3], ['±7 days', 7], ['±14 days', 14]]

export const CalendarFooter = () => {
    const [chooseDay, setChooseDay] = useState<number>();

    return (
        <div className="flex items-center gap-3 p-2">
            <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
                Exact dates
            </div>
            {days.map((day: [string, number]) => {
                return (
                    <div key={day[1]}
                         onClick={() => setChooseDay(day[1])}
                         className={`${chooseDay === day[1] ? "border-[1px] border-black" : "border border-slate-300"} cursor-pointer rounded-md py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600`}>
                        {day[0]}
                    </div>
                )
            })}
        </div>
    );
}



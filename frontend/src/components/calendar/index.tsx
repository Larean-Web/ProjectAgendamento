import CSchedule from "./Cshedule/Cshedule";
function Calendar() {
    const hours = [
        {
            hours: 9,
        },
        {
            hours: 10,
        },
        {
            hours: 11,
        },
        {
            hours: 12,
        },
        {
            hours: 13,
        },
        {
            hours: 14,
        },
        {
            hours: 15,
        },
        {
            hours: 16,
        },
        {
            hours: 17,
        },
        {
            hours: 18,
        },
        {
            hours: 19,
        },
        {
            hours: 20,
        },
        {
            hours: 23,
        },
    ];
    return (
        <div className="flex">
            <div className="flex flex-col gap-5 p-2 border-r-4">
                {hours?.map((item) => {
                    return (
                        <div key={item.hours}>
                            <h1>{item.hours}h</h1>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col w-full">
                <CSchedule
                    name="Fulano Sicrano"
                    service="Depilação"
                    start={9}
                    stop={10}
                    price="00.00"
                />
                <CSchedule
                    name="Fulano Beltrano"
                    service="Depilação"
                    start={9}
                    stop={10}
                    price="00.00"
                />
            </div>
        </div>
    );
}
export default Calendar;


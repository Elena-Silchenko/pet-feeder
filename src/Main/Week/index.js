const weekdays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri"
];

const weekends = [
    "Sat",
    "Sun"
]

export default function Week() {
    
    return (
        <div className="d-flex p-4">
            <div className="mod m-auto">
                <div className="d-flex p-4">
                    <div className="week d-flex m-auto">
                        {
                            weekdays.map((day, index) => (
                                <div className="weekday" key={index}>{day}</div>
                            ))
                        }
                        {
                            weekends.map((day, index) => (
                                <div className="weekend" key={5+index}>{day}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
}

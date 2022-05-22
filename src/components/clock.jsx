import React, { Fragment } from "react";

const Clock = ({ timeDays, timeHours, timeMinutes, timeSeconds}) =>
{
    return (
    <Fragment>
        <section className="time-container">
            <section className="time">
                <div className="clock">
                    <section>
                        <p>{timeDays} - {timeHours} : {timeMinutes} : {timeSeconds}</p> 
                    </section>
                </div>
            </section>
        </section>
    </Fragment>
    );
};

Clock.defaultProps = {
    timeDays: 0,
    timeHours: 0,
    timeMinutes: 0,
    timeSecond: 0,
};

export default Clock;
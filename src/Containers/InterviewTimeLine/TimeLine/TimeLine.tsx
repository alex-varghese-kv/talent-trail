import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import 'react-vertical-timeline-component/style.min.css';
import events from './event.json';
const TimeLine = () => {
  //   const getTImeLineDetails = (status: string, actionItem:) => {};
  return (
    <div className="App">
      <VerticalTimeline layout="1-column-left">
        {events.map((event) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(49,121,90)', color: '#fff' }}
          >
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full border-b-4 ">
                <h4 className="text-sm">hello</h4>
                <h4 className="text-sm">July 8</h4>
              </div>
              <div className="flex text-left break-all">
                <p>{event.event}</p>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;

import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';
import './SearchResults.css';

const SearchResults = (props) => {
  const { results } = props;

  // let itemsToRender;
  // if (results) {
  //   itemsToRender = results.map((item, key) => {
  //     return <div key={key}>{item.title}</div>;
  //   });
  // }

  // name: 'Yoga',
  //   type: 'stretching',
  //   startTime: '2:00pm',
  //   duration: '1 hour',
  //   intensity: 'easy',
  //   location: 'park',
  //   numberOfRegisteredAttendees: 7,
  //   maxClassSize: 12,

  return (
    <div className="search_result_container">
      {console.log(results)}
      {results &&
        results.map((item, key) => {
          return (
            <div className="search_result_item" key={key}>
              <h3>{item.name}</h3>
              <p>Class: {item.type}</p>
              <p>Intensity: {item.intensity}</p>
              <p>Location: {item.location}</p>
              <p>
                Seats remaining:
                {item.maxClassSize - item.numberOfRegisteredAttendees}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResults;

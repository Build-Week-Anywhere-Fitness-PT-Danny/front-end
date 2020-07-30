import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';

const SearchResults = ({ isFetching, values, results, select }) => {
  const [newResults, setNewResults] = useState();

  useEffect(() => {
    if (select === 'name') {
      const filter = results.filter((item) =>
        item.name.toLowerCase().includes(values)
      );
      setNewResults(filter);
    } else if (select === 'type') {
      const filter = results.filter((item) =>
        item.type.toLowerCase().includes(values)
      );
      setNewResults(filter);
    } else if (select === 'time') {
      const filter = results.filter((item) =>
        item.startTime.toLowerCase().includes(values)
      );
      setNewResults(filter);
    } else if (select === 'duration') {
      const filter = results.filter((item) =>
        item.duration.toLowerCase().includes(values)
      );
      setNewResults(filter);
    } else if (select === 'intensity') {
      const filter = results.filter((item) =>
        item.intensity.toLowerCase().includes(values)
      );
      setNewResults(filter);
    } else if (select === 'location') {
      const filter = results.filter((item) =>
        item.location.toLowerCase().includes(values)
      );
      setNewResults(filter);
    }
  }, values);

  return (
    <div className="search_result_container">
      {newResults &&
        newResults.map((item, key) => {
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    results: state.results,
    values: state.values,
    select: state.select,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {})(SearchResults);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchingVal } from '../actions/actions';
import './SearchResults.css';

const SearchResults = ({
  searching,
  values,
  results,
  select,
  searchingVal,
}) => {
  const [newResults, setNewResults] = useState();

  useEffect(() => {
    if (searching) {
      if (select === undefined) {
        const filter = results.filter((item) =>
          item.name.toLowerCase().includes(values)
        );
        searchingVal(false);
        setNewResults(filter);
      } else if (select === 'name') {
        const filter = results.filter((item) =>
          item.name.toLowerCase().includes(values)
        );
        searchingVal(false);
        setNewResults(filter);
      } else if (select === 'type') {
        const filter = results.filter((item) =>
          item.type.toLowerCase().includes(values)
        );
        searchingVal(false);
        setNewResults(filter);
      } else if (select === 'time') {
        const filter = results.filter((item) =>
          item.startTime.toLowerCase().includes(values)
        );
        searchingVal(false);
        setNewResults(filter);
      } else if (select === 'duration') {
        const filter = results.filter((item) =>
          item.duration.toLowerCase().includes(values)
        );
        searchingVal(false);
        setNewResults(filter);
      } else if (select === 'intensity') {
        const filter = results.filter((item) =>
          item.intensity.toLowerCase().includes(values)
        );
        searchingVal(false);
        setNewResults(filter);
      } else if (select === 'location') {
        const filter = results.filter((item) =>
          item.location.toLowerCase().includes(values)
        );
        searchingVal(false);
        setNewResults(filter);
      }
    }
  }, [searching]);

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
    searching: state.searching,
    results: state.results,
    values: state.values,
    select: state.select,
  };
};

export default connect(mapStateToProps, { searchingVal })(SearchResults);

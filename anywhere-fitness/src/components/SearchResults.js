import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../actions/actions';
import './SearchResults.css';

const SearchResults = ({ getClasses, results, isFetching }) => {
  useEffect(() => {
    getClasses();
  }, [getClasses]);
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
  if (isFetching) {
    return <div className="search_result_container"></div>;
  }
  return (
    <div className="search_result_container">
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    results: state.results,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getClasses })(SearchResults);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  searchingVal,
  addJoinedClass,
  addClassToDB,
  getClasses,
} from '../actions/actions';
import './SearchResults.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SearchResults = ({
  searching,
  values,
  results,
  select,
  searchingVal,
  addJoinedClass,
  addClassToDB,
  joinedClass,
  addToDB,
  getClasses,
}) => {
  const [newResults, setNewResults] = useState();
  const defaultClass = {
    id: '',
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensity: '',
    location: '',
    numberOfRegisteredAttendees: '',
    maxClassSize: '',
  };
  const [joinClass, setJoinClass] = useState(defaultClass);

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

  const submit = (e, item) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/classes/${item.id}`, addToDB)
      .then((res) => {
        console.log('session posted', res);
        alert('Class joined!');
        getClasses();
      })
      .catch((er) => {
        console.log('there was an error', er.response.statusText);
      });
  };

  const handleJoin = (e, item) => {
    e.preventDefault();
    // setJoinClass({
    //   id: item.id,
    //   name: item.name,
    //   type: item.type,
    //   startTime: item.startTime,
    //   duration: item.duration,
    //   intensity: item.intensity,
    //   location: item.location,
    //   numberOfRegisteredAttendees: item.numberOfRegisteredAttendees + 1,
    //   maxClassSize: item.maxClassSize,
    // });
    // console.log(joinClass);
    // addJoinedClass(item);
    // console.log(joinedClass);
    // submit(e, joinClass);
    addJoinedClass(item);
    addClassToDB(item);
    submit(e, item);
  };

  if (values != '') {
    return (
      <div className="search_result_container">
        {newResults &&
          newResults.map((item, key) => {
            return (
              <div className="search_result_item" key={key}>
                <div className="s_r_d_container">
                  <h2>{item.name}</h2>
                  <div className="search_result_display">
                    <p>Class: {item.type}</p>
                    <p>Intensity: {item.intensity}</p>
                    <p>Location: {item.location}</p>
                    <p>
                      Seats remaining:
                      {item.maxClassSize - item.numberOfRegisteredAttendees}
                    </p>
                  </div>
                </div>
                <button
                  className="search_result_button"
                  onClick={(e) => handleJoin(e, item)}
                >
                  +
                </button>
              </div>
            );
          })}
      </div>
    );
  } else {
    return (
      <div className="no_res_con">
        <h4 className="no_res_heading">Search for a class!</h4>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    addToDB: state.addToDB,
    joinedClass_array: state.joinedClass_array,
    searching: state.searching,
    results: state.results,
    values: state.values,
    select: state.select,
  };
};

export default connect(mapStateToProps, {
  searchingVal,
  addJoinedClass,
  addClassToDB,
  getClasses,
})(SearchResults);

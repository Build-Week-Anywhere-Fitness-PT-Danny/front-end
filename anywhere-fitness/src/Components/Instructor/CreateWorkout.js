import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as Yup from "yup";

function CreateWorkout(props) {

const [createClass, setCreateClass] = useState({
    name: "",
    type: "",
    startTime: "",
    duration: "",
    intensity: "",
    location: "",
    numberOfRegisteredAttendees: "",
    maxClassSize: ""
})

const [buttonDisabled, setButtonDisabled] = useState(true);

const handleChange = event => {
    setCreateClass({...createClass, [event.target.name]: event.target.value})
    validateChange(event);
}

const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(5,"Must include Full Name")
      .required("Must include Full Name"),
    type: Yup
      .string()
      .required(),
    startTime: Yup
      .string()
      .required(),
    duration: Yup
      .string()
      .required(),
    intensity: Yup
      .string()
      .required(),
    location: Yup
      .string()
        .min(5,"Must Fill Out Location")
        .required(),
    maxClassSize: Yup
        .string()
        .required("Must choose class size"),
  });

  useEffect(() => {
    formSchema.isValid(createClass).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [createClass]);

  const [errors, setErrors] = useState({
    name: "",
    type: "",
    startTime: "",
    duration: "",
    intensity: "",
    location: "",
    numberOfRegisteredAttendees: "",
    maxClassSize: ""
})

  const validateChange = e => {
    e.persist();
    Yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() =>
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      )
      .catch(error =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0]
        })
      );
  };

const handleSubmit = event => {
    event.preventDefault();
    if(createClass) {
        props.setSavedClass([...props.savedClass,{createClass}])
    }
    axios
    .post("https://reqres.in/api/classes", createClass)
    .then(() => console.log("form submitted success"))
    .catch(err => console.log(err));
}



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create Class</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Class Name"
                    onChange={handleChange}
                    value={createClass.name}
                />
                {errors.name.length > 0 ? (<p>{errors.name}</p>) : null}
                <label htmlForm="type">
                Class Type
                <select name="type" onChange={handleChange} value={createClass.type}>
                    <option value="yoga">Yoga</option>
                    <option value="strength">Strength</option>
                    <option value="cycle">cycle</option>
                </select>
                </label>
                <label htmlForm="startTime">
                Start Time
                <select name="startTime" onChange={handleChange} value={createClass.startTime}>
                    <option value="7">7 am</option>
                    <option value="10">10 am</option>
                    <option value="6">6 pm</option>
                    <option value="9">9 pm</option>
                </select>
                </label>
                <label htmlForm="duration">
               Duration
                <select name="duration" onChange={handleChange} value={createClass.duration}>
                    <option value="45">45 mins</option>
                    <option value="60">60 mins</option>
                    <option value="90">90 mins</option>
                </select>
                </label>
                <label htmlForm="intensity">
               Intensity
                <select name="intensity" onChange={handleChange} value={createClass.intensity}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                </label>
                <input
                    type="text"
                    name="location"
                    placeholder="location"
                    onChange={handleChange}
                    value={createClass.location}
                />
                {errors.location.length > 0 ? (<p>{errors.location}</p>) : null}
                <input
                    type="text"
                    name="maxClassSize"
                    placeholder="Max Class Size"
                    onChange={handleChange}
                    value={createClass.maxClassSize}
                />
                {errors.maxClassSize.length > 0 ? (<p>{errors.maxClassSize}</p>) : null}

            <input
                disabled={buttonDisabled}
                id="submit"
                type="submit"
                name="submit"
            />

            </form>
        </div>
    )
}

export default CreateWorkout

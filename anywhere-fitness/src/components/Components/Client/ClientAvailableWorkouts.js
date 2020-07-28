import React, { useState, useEffect } from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
import axios from 'axios'
import * as Yup from "yup"

function ClientAvailableWorkouts(props) {
    //create a way for clients to search workouts based 
    // off of :
    // time data duration type intensity location

    //Have this return a card that has the saved workouts

    const [searchClass, setSearchClass] = useState({
        time:"",
        data:"",
        duration:"",
        type:"",
        intensity:"",
        location:"",
    });

    const [errors, setErrors] = useState({
        time: "",
        data: "",
        duration: "",
        type: "",
        intensity: "",
        location: "",
    })

    const formSchema = Yup.object().shape({
        time: Yup
          .string()
          .required(),
        data: Yup
          .string()
          .required(),
        duration: Yup
          .string()
          .required(),
        type: Yup
          .string()
          .required(),
        intensity: Yup
          .string()
            .required(),
        location: Yup
            .string()
            .required("Must choose class size"),
      });
    
    const handleChange = event => {
        setSearchClass({...searchClass, [event.target.name]: event.target.value})
        validateChange(event);
    }

    const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(searchClass).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [searchClass]);

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
            // if(searchClass) {
            //     props.setSearchClass([...props.savedClass,{searchClass}])
            // }
            axios
            .get("https://reqres.in/api/classes", searchClass)
            .then(() => console.log("form submitted success", searchClass))
            .catch(err => console.log(err));
        }
        



        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Hello</h1>
                    <label htmlForm="startTime">
                        Start Time
                            <select name="time"  onChange={handleChange} value={searchClass.time}>
                                <option value="7">7 am</option>
                                <option value="10">10 am</option>
                                <option value="6">6 pm</option>
                                <option value="9">9 pm</option>
                            </select>
                    </label>
                    <label htmlForm="duration">
                        Duration
                            <select name="duration" onChange={handleChange}  className="input" value={searchClass.duration}>
                                <option value="45">45 mins</option>
                                <option value="60">60 mins</option>
                                <option value="90">90 mins</option>
                            </select>
                    </label>
                    <label htmlForm="type">
                        Class Type
                            <select name="type" onChange={handleChange} className="input" value={searchClass.type}>
                                <option value="yoga">Yoga</option>
                                <option value="strength">Strength</option>
                                <option value="cycle">cycle</option>
                            </select>
                    </label>
                    <label htmlForm="intensity">
                        Intensity
                            <select name="intensity" onChange={handleChange} value={searchClass.intensity}>
                                <option value="beginner" className="option">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                    </label>
                    <Input
                        className="input"
                        type="text"
                        name="location"
                        placeholder="location"
                        onChange={handleChange}
                        value={searchClass.location}
                    />

                        <Input
                        id="submit"
                        type="submit"
                        name="submit"
                        disabled={buttonDisabled}
                    />
                </form>
            </div>
        )


}

export default ClientAvailableWorkouts
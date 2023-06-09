import { useEffect, useState } from "react"
import { getEmployeeForm, saveEmployee } from "../ApiManager"

export const EmployeeForm = () => {
    // TODO: Provide initial state for profile
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    const [ profile, updateProfile] = useState({
    specialty: "",
    rate: 0,
    userId: 0
})
    
    const [feedback, setFeedback] = useState("")

useEffect(() => {
    if (feedback !== "") {
        // Clear feedback to make entire element disappear after 3 seconds
        setTimeout(() => setFeedback(""), 3000);
    }
}, [feedback])

    // TODO: Get employee profile info from API and update state
useEffect(() => {
    getEmployeeForm(honeyUserObject)
    .then((data) => {
    const employeeObject = data[0]
    updateProfile(employeeObject)
    })
},
[])



    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
          saveEmployee(profile)
            .then(() => {
                updateProfile({
                    ...profile, // this is preserving the userId of the person logged in so no weird issues with trying to update the profile again
                    specialty: "",
                    rate: 0,
                })
            })
            .then(() => {
                setFeedback("Employee profile successfully saved")
            })
    }

    return (
       <div>
    <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
    {feedback}
    </div>
        <form className="profile">
            <h2 className="profile__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile?.specialty}
                        onChange={
                            (evt) => {
                                const copy = {...profile}
                                copy.specialty = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly rate:</label>
                    <input type="number"
                        className="form-control"
                        value={profile?.rate}
                        onChange={
                            (evt) => {
                                const copy = {...profile}
                                copy.rate = parseFloat(evt.target.value, 2)
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Profile
            </button>
        </form>
   </div>
   )
}
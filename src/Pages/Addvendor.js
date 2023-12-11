import React, { useState } from "react";
import "./Formstyle.css";
const Addvendor = () => {
  function Formaddvendor() {
    const [Name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [officeno, setOfficeno] = useState("");
    const [comments, setComments] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleMobileChange = (event) => {
      setMobileno(event.target.value);
    };

    const handleOfficeChange = (event) => {
      setOfficeno(event.target.value);
    };
    const handleCommentsChange = (event) => {
      setComments(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if (Name.trim() === "" || email.trim() === "") {
        alert(
          "Please fill in all required fields (Name, Mobile, Address,email)"
        );
        setIsValid(false);
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        setIsValid(false);
      } else {
        setIsValid(true);
        console.log("Form submitted with the following data:");
        console.log("Name:", Name);
        console.log("Address:", address);
        console.log("Email:", email);
        console.log("Mobileno:", mobileno);
        console.log("Officeno:", officeno);
        console.log("comment:", comments);
      }
    };

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const clearForm = () => {
      setName("");
      setEmail("");
      setMobileno("");
      setOfficeno("");
      setAddress("");
      setComments("");
      setIsValid(true);
    };

    return (
      <div>
        <center>
          <h1>ADD VENDOR TABLE</h1>
        </center>

        <form onSubmit={handleSubmit}>
          <table className="table">
            <tr>
              <td class="cell">
                <label>Name</label>
              </td>

              <td class="cell" colspan="3">
                <input
                  type="text"
                  className="inputBox"
                  name="Name"
                  value={Name}
                  onChange={handleNameChange}
                />
              </td>
            </tr>

            <tr>
              <td class="cell">Address</td>
              <td colspan="3" class="cell">
                <textarea
                  className="inputBox2"
                  name="address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </td>
            </tr>

            <tr>
              <td class="cell">Email</td>
              <td class="cell" colspan="3">
                <input
                  type="email"
                  className="inputBox"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </td>
            </tr>

            <tr>
              <td class="cell">Mobile No</td>
              <td>
                <input
                  type="text"
                  className="inputBox"
                  name="mobileno"
                  value={mobileno}
                  onChange={handleMobileChange}
                />
              </td>
              <td class="cell">Office No</td>
              <td>
                <input
                  type="tel"
                  className="inputBox"
                  name="officeno"
                  value={officeno}
                  onChange={handleOfficeChange}
                />
              </td>
            </tr>

            <tr>
              <td class="cell">Comments</td>
              <td colspan="3" class="cell">
                <textarea
                  className="inputBox3"
                  name="comments"
                  value={comments}
                  onChange={handleCommentsChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="cell">
                <input
                  type="button"
                  value="clear"
                  className="inputBox"
                  onClick={clearForm}
                />
              </td>
              <td class="cell">
                <input
                  type="submit"
                  name="submit"
                  value="submit"
                  className="inputBox"
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
};

export default Addvendor;

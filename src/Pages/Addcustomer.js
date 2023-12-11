import React, { useState } from "react";
import "./Formstyle.css";

const Addcustomer = () => {
  function Form() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [officeno, setOfficeno] = useState("");
    const [comments, setComments] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
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

    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);

      if (selectedValue !== "") {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if (
        firstname.trim() === "" ||
        lastname.trim() === "" ||
        mobileno.trim() === "" ||
        email.trim() === "" ||
        selectedOption === ""
      ) {
        alert(
          "Please fill in all required fields (First Name, Last Name, Mobile, Category)"
        );
        setIsValid(false);
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        setIsValid(false);
      } else {
        setIsValid(true);
        console.log("Form submitted with the following data:");
        console.log("First Name:", firstname);
        console.log("Last Name:", lastname);
        console.log("Address:", address);
        console.log("Email:", email);
        console.log("Category:", selectedOption);
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
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobileno("");
      setSelectedOption("");
      setAddress("");
      setComments("");
      setIsValid(true);
    };

    return (
      <div>
        <center>
          <h1>ADD CUSTOMER TABLE</h1>
        </center>

        <form onSubmit={handleSubmit}>
          <table className="table">
            <tr>
              <td class="cell">
                <label>First Name</label>
              </td>

              <td class="cell">
                <input
                  type="text"
                  className="inputBox"
                  name="firstname"
                  value={firstname}
                  onChange={handleFirstNameChange}
                />
              </td>
              <td class="cell">Last Name</td>
              <td class="cell">
                <input
                  type="text"
                  className="inputBox"
                  name="lastname"
                  value={lastname}
                  onChange={handleLastNameChange}
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
              <td class="cell">
                <input
                  type="email"
                  className="inputBox"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </td>
              <td class="cell">Category</td>
              <td>
                <select
                  id="Category"
                  name="Category"
                  className="inputBox"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="guest" name="guest" id="guest">
                    Guest
                  </option>
                  <option value="real" name="real">
                    Real
                  </option>
                </select>
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
                  onClick={clearForm}
                  value="clear"
                  className="inputBox"
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

export default Addcustomer;

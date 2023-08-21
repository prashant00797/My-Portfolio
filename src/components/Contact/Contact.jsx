//dependency
import React from "react";

//components
import { ContactData } from "../../Data/constant";

//css imports
import "./contact.scss";

export const Contact = () => {
  return (
    <div id="contact" className="ui-contact">
      <div className="ui-contact__titleWrapper">
        <h1 className="ui-contact__titleWrapper__title">
          {ContactData.LETS_TALK}
        </h1>
      </div>
      <div className="ui-contact__formWrapper">
        <form
          className="ui-contact__formWrapper__form"
          action="https://formspree.io/f/mdovgwrk"
          method="POST"
        >
          <label
            className="ui-contact__formWrapper__form__label"
            htmlFor="username"
          >
            {ContactData.NAME}
          </label>
          <input
            className="ui-contact__formWrapper__form__inputname"
            type="text"
            name="username"
            id="username"
            required
            placeholder="Please Enter Your Name"
            autoComplete="off"
          />
          <label
            className="ui-contact__formWrapper__form__label"
            htmlFor="userEmail"
          >
            {ContactData.EMAIL}
          </label>
          <input
            className="ui-contact__formWrapper__form__inputemail"
            type="email"
            name="userEmail"
            id="userEmail"
            required
            autoComplete="off"
            placeholder="Please Enter Your Email Address"
          />
          <label
            className="ui-contact__formWrapper__form__label"
            htmlFor="userMessage"
          >
            {ContactData.YOUR_MESSAGE}
          </label>
          <textarea
            name="userMessage"
            id="userMessage"
            cols="30"
            rows="10"
            className="ui-contact__formWrapper__form__inputmessage"
            placeholder="Enter Your Message"
            autoComplete="off"
            required
          ></textarea>
          <input
            className="ui-contact__formWrapper__form__btnsubmit"
            type="submit"
            value={ContactData.SUBMIT}
          />
        </form>
      </div>
    </div>
  );
};

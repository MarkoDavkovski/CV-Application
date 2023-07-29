const GeneralInfo = ({ handleChange }) => {
  return (
    <>
      <h2>General Information</h2>
      <form id="general-info">
        <label htmlFor="name">Full name: </label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          placeholder="Marck Dawson"
        />
        <label htmlFor="email">Your email address:</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          placeholder="m.dawson@mail.com"
        />
        <label htmlFor="phone-number">Your phone number:</label>
        <input
          type="tel"
          id="phone-number"
          onChange={handleChange}
          placeholder="0038975979818"
        />
        {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
      </form>
    </>
  );
};

export default GeneralInfo;

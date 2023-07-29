const PracticalExp = ({ handleChange }) => {
  return (
    <>
      <h2>Practical Experience</h2>
      <form id="practical-experience">
        <label htmlFor="company-name">Company Name :</label>
        <input
          type="text"
          id="company-name"
          placeholder="Facebook"
          onChange={handleChange}
        />

        <label htmlFor="position-title">Position Title:</label>
        <input
          type="text"
          id="position-title"
          placeholder="Web Developer"
          onChange={handleChange}
        />

        <label htmlFor="main-responsibilities">
          Main responsibilities of your jobs
        </label>
        <textarea
          type="tel"
          id="main-responsibilities"
          onChange={handleChange}
          placeholder="Creating and maintaining the front-end of the platform."
        />

        <label htmlFor="date-from">
          From : &nbsp;
          <input type="date" id="date-from" onChange={handleChange} />
        </label>

        <label htmlFor="date-to">
          To :&nbsp;
          <input type="date" id="date-to" onChange={handleChange} />
        </label>

        {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
      </form>
    </>
  );
};

export default PracticalExp;

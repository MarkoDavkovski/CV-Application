const EducationalExp = ({ handleChange }) => {
  return (
    <>
      <h2>Educational Experience</h2>

      <form id="educational-experience">
        <label htmlFor="school-name">School Name: </label>
        <input
          type="text"
          id="-school-name"
          onChange={handleChange}
          placeholder="UTMS"
        />

        <label htmlFor="title-of-study">Title of study:</label>
        <input
          type="text"
          id="title-of-study"
          onChange={handleChange}
          placeholder="Web Development"
        />

        <label htmlFor="date-of-study">Date of study:</label>
        <input type="date" id="date-of-study" onChange={handleChange} />

        {/* <button type="submit" onClick={handleSubmit}>
          Submit
        </button> */}
      </form>
    </>
  );
};

export default EducationalExp;

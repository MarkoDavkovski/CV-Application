import "../styles/displayCV.css";

const DisplayCV = ({ formData }) => {
  if (!formData || Object.keys(formData).length === 0) {
    return <section id="displayCV">No data entered yet.</section>;
  }

  return (
    <section id="displayCV">
      <h2>Personal Information</h2>
      {formData.name && (
        <div className="personalInformation">
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
        </div>
      )}
      {formData.email && (
        <div className="personalInformation">
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
      )}
      {formData["phone-number"] && (
        <div className="personalInformation">
          <p>
            <strong>Phone Number:</strong> {formData["phone-number"]}
          </p>
        </div>
      )}

      <h2>Educational Experience</h2>
      {formData["school-name"] && (
        <div className="educationalExperience">
          <p>
            <strong>School Name:</strong> {formData["school-name"]}
          </p>
        </div>
      )}
      {formData["title-of-study"] && (
        <div className="educationalExperience">
          <p>
            <strong>Title of Study:</strong> {formData["title-of-study"]}
          </p>
        </div>
      )}
      {formData["date-of-study"] && (
        <div className="educationalExperience">
          <p>
            <strong>Date of Study:</strong> {formData["date-of-study"]}
          </p>
        </div>
      )}

      <h2>Practical Experience</h2>
      {formData["company-name"] && (
        <div className="practicalExperience">
          <p>
            <strong>Company Name:</strong> {formData["company-name"]}
          </p>
        </div>
      )}
      {formData["position-title"] && (
        <div className="practicalExperience">
          <p>
            <strong>Position Title:</strong> {formData["position-title"]}
          </p>
        </div>
      )}
      {formData["main-responsibilities"] && (
        <div className="practicalExperience">
          <p>
            <strong>Main Responsibilities:</strong>{" "}
            {formData["main-responsibilities"]}
          </p>
        </div>
      )}
      {formData["date-from"] && (
        <div className="practicalExperience">
          <p>
            <strong>From:</strong> {formData["date-from"]}
          </p>
        </div>
      )}
      {formData["date-to"] && (
        <div className="practicalExperience">
          <p>
            <strong>To:</strong> {formData["date-to"]}
          </p>
        </div>
      )}
    </section>
  );
};

export default DisplayCV;

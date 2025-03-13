import SubmitButton from './Submit';
import EditButton from './Edit';
import useFormSubmit from './useFormSubmit';

function Education() {
  const { isSubmitted, formData, handleEdit, handleSubmit, handleInputChange } = useFormSubmit({
    schoolName: '',
    officialTitle: '',
    finishDate: ''
  });

  if (isSubmitted) {
    return (
      <>
        <h3>School Name</h3>
        <div>{formData.schoolName}</div>
        <h3>Official Title</h3>
        <div>{formData.officialTitle}</div>
        <h3>Finish Date</h3>
        <div>{formData.finishDate}</div>
        <EditButton onClick={handleEdit} />
      </>
    );
  }

  return (
    <>
      <h1>Education</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="schoolName">School Name</label>
        <input type="text" id="schoolName" value={formData.schoolName} onChange={handleInputChange} />
        <label htmlFor="officialTitle">Official Title</label>
        <input type="text" id="officialTitle" value={formData.officialTitle} onChange={handleInputChange} />
        <label htmlFor="finishDate">Finish Date</label>
        <input type="date" id="finishDate" value={formData.finishDate} onChange={handleInputChange} />
        <SubmitButton onClick={handleSubmit} />
      </form>
    </>
  );
}

export default Education;
import SubmitButton from './Submit';
import EditButton from './Edit';
import useFormSubmit from './useFormSubmit';

function Experience() {
  const { isSubmitted, formData, handleEdit, handleSubmit, handleInputChange } = useFormSubmit({
    companyName: '',
    position: '',
    startDate: '',
    finishDate: ''
  });

  if (isSubmitted) {
    return (
      <>
        <h3>Company Name</h3>
        <div>{formData.companyName}</div>
        <h3>Position</h3>
        <div>{formData.position}</div>
        <h3>Start Date</h3>
        <div>{formData.startDate}</div>
        <h3>Finish Date</h3>
        <div>{formData.finishDate}</div>
        <EditButton onClick={handleEdit} />
      </>
    );
  }

  return (
    <>
      <h1>Experience</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" value={formData.companyName} onChange={handleInputChange} />
        <label htmlFor="position">Position</label>
        <input type="text" id="position" value={formData.position} onChange={handleInputChange} />
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" value={formData.startDate} onChange={handleInputChange} />
        <label htmlFor="finishDate">Finish Date</label>
        <input type="date" id="finishDate" value={formData.finishDate} onChange={handleInputChange} />
        <SubmitButton onClick={handleSubmit} />
      </form>
    </>
  );
}

export default Experience;
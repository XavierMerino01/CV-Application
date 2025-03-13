
import SubmitButton from './Submit';
import EditButton from './Edit';
import useFormSubmit from './useFormSubmit';

function Personal() {
  const { isSubmitted, formData, handleEdit, handleSubmit, handleInputChange } = useFormSubmit({ name: '', email: '', phone: '' });

  if (isSubmitted) {
    return (
      <>
        <h3>Full Name</h3>
        <div>{formData.name}</div>
        <h3>Email</h3>
        <div>{formData.email}</div>
        <h3>Phone</h3>
        <div>{formData.phone}</div>
        <EditButton onClick={handleEdit} />
      </>
    );
  }

  return (
    <>
      <h1>Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" value={formData.name} onChange={handleInputChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" value={formData.phone} onChange={handleInputChange} />
        <SubmitButton onClick={handleSubmit} />
      </form>
    </>
  );
}

export default Personal;
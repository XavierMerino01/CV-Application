import { useState } from 'react';

function useFormSubmit(initialState) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  return {
    isSubmitted,
    formData,
    handleEdit,
    handleSubmit,
    handleInputChange,
    setFormData
  };
}

export default useFormSubmit;
import axios from 'axios';

export const QueryForm = async(values) => {
  const updatedValues = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      value === "" ? "N/A" : value,
    ])
  );

  try {
    const response = await axios.post("https://inbuild-mail.onrender.com/api/query-form", updatedValues);
    return { data: response.status, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}



export const CareerFormData = async(values) => {
  const updatedValues = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      value === "" ? "N/A" : value,
    ])
  );
  try {
    const response = await axios.post("https://inbuild-mail.onrender.com/api/career-form", updatedValues,  {headers: {
      'Content-Type': 'multipart/form-data'
    }});
    return { data: response.status, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}
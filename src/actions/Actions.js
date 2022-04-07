
export const sendEmail = (userData) => {
    axios.post("/api/sendEmail", userData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    })
};
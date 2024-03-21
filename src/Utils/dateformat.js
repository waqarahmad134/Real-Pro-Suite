export default function formatDate(inputDateString) {
    const inputDate = new Date(inputDateString);

    const day = String(inputDate.getDate()).padStart(2, '0');
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = inputDate.getFullYear();

    return `${day}/${month}/${year}`;
  }
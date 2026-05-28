export const getRandomBackGround = () => {
  const colors = [
   "#065F46", // Dark Emerald
    "#991B1B", // Dark Red
    "#92400E", // Dark Amber
    "#1E3A8A", // Dark Blue
    "#9D174D", // Dark Pink
    "#115E59", // Dark Teal
    "#312E81" // Dark Indigo
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export const getInitialName = (name)=>{
    if(!name) return ""
    return name.split(" ").map(word=>word[0]).join("").toUpperCase()
}

export const getDate = (date) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Uses proper backticks (`) and closes the getFullYear() evaluation correctly
  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
};
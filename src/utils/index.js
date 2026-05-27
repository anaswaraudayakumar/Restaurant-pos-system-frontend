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
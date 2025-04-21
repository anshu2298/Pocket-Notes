export const getInitials = (groupName) => {
  if (!groupName) return "";

  const words = groupName.trim().split(" ");
  let initials = "";

  for (
    let i = 0;
    i < words.length && initials.length < 2;
    i++
  ) {
    if (words[i].length > 0) {
      initials += words[i][0].toUpperCase();
    }
  }

  return initials;
};

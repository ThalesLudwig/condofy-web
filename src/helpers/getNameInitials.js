const getNameInitials = (name) => {
  const splittedName = name.split(" ");
  const firstName = splittedName[0];
  const lastName = splittedName[splittedName.length - 1];
  return firstName[0].toUpperCase() + lastName[0].toUpperCase();
};

export default getNameInitials;

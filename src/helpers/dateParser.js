import moment from "moment";

export const dateParser = (date) => {
  return moment(date, "YYYY-MM-DDTHH:mm:ss.000Z").format("DD/MM/YYYY HH:mm");
};

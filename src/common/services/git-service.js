import _ from "lodash";

export const columnDefinitions = [
  {
    field: "name",
    width: 200,
    headerName: "Name",
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    field: "email",
    width: 270,
    headerName: "Email",
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    field: "date",
    width: 210,
    headerName: "Commit Date",
    sortable: true,
    filter: "agDateColumnFilter",
  },
  {
    field: "message",
    width: 600,
    headerName: "Message",
    sortable: true,
    filter: "agTextColumnFilter",
  },
];

export const getGitCommitsData = (data) => {
  return _.map(data, (c) => {
    let author = _.get(c, "commit.author.name", "-");
    let email = _.get(c, "commit.author.email", "-");
    let date = _.get(c, "commit.author.date", "-");
    let message = _.get(c, "commit.message", "-");

    return {
      name: author,
      date: getDisplayDate(date),
      email: email,
      message: message,
    };
  });
};

const getDisplayDate = (dateValue) => {
  try {
    if (dateValue) {
      var d = new Date(dateValue),
        minutes =
          d.getMinutes().toString().length == 1
            ? "0" + d.getMinutes()
            : d.getMinutes(),
        hours =
          d.getHours().toString().length == 1
            ? "0" + d.getHours()
            : d.getHours(),
        amPm = d.getHours() >= 12 ? "PM" : "AM",
        months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return (
        days[d.getDay()] +
        " " +
        months[d.getMonth()] +
        " " +
        d.getDate() +
        " " +
        d.getFullYear() +
        " " +
        hours +
        ":" +
        minutes +
        amPm
      );
    } else {
      return "-";
    }
  } catch (error) {
    console.error(error);
    return "-";
  }
};

const makePdf = (communityCollege, sport, athleticConference) => {
  // playground requires you to assign document definition to a variable called dd

  var dd = {
    content: [
      {
        image: "data:image/jpeg;base64,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",
        width: 50,
        alignment: "left",
      },

      {
        text: "STUDENT ELIGIBILITY REPORT\n\n",

        style: "header",
        alignment: "center",
        fontSize: 18,
      },
      {
        text: "Please type or print neatly\n\n",
        style: "header",
        alignment: "center",
        bold: false,
      },
      {
          columns: [
                {
                    text: `${communityCollege}`,
                    width: 150
                },
                 {
                    text: `${athleticConference}`,
                    width: 150
                },
                 {
                    text: `${sport}`,
                    width: 150
                }
                ],
      },
      {
        columns: [
          {
            width: 150,
            text: [
              "__________________________",
              {
                text: "  Your Present College",
                style: "header",
                bold: false,
                alignment: "center",
                fontSize: 10,
              },
            ],
          },
          {
            width: 150,
            text: [
              "__________________________",
              {
                text: " Your Present Conference",
                style: "header",
                bold: false,
                alignment: "center",
                fontSize: 10,
              },
            ],
          },

          {
            width: 150,
            text: [
              "__________________________",
              {
                text: " Sport This Season",
                style: "header",
                bold: false,
                alignment: "center",
                fontSize: 10,
              },
            ],
          },

          {
            width: 1,
            text: "text",
            table: {
              body: [["x"]],
            },
          },
        ],
      },

      {
        text:
          "\n\n\n\n\n\n\n\n Including this college and this season, list all of the colleges and sports in which you have practiced, scrimmaged, or competed,including club sports, JV, and varsity contests since high school: (If you only practiced or scrimmaged in a sport, please state.)\n\n",
      },

      {
        style: "tableExample",
        table: {
          widths: [100, 210, 80, 50, 25],
          body: [
            [
              { text: "Sport", alignment: "center", fontSize: 10 },
              { text: "College", alignment: "center", fontSize: 10 },
              { text: "Varsity/JV/Club", alignment: "center", fontSize: 10 },
              { text: "Semester", alignment: "center", fontSize: 10 },
              { text: "Yr", alignment: "center", fontSize: 10 },
            ],
            [
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "\n", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
            ],
            [
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "\n", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
            ],
            [
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "\n", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
            ],
            [
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
              { text: "\n", italics: true, color: "gray" },
              { text: "", italics: true, color: "gray" },
            ],
          ],
        },
      },
      {
        text:
          "\nIt is important to understand that while the season of competition has been waived for CCCAA student-athletes during the 2020-21 (Fall & Spring) sport seasons, you may not receive the same consideration with the NCAA. Specifically, your additionalseason of competition at a California Community College may be considered as an additional year of competition by the NCAA.The NAIA honors CCCAA waivers. My signature certifies that the information I have given is true.",
      },
    ],
  };
  return dd;
};

module.exports = makePdf;
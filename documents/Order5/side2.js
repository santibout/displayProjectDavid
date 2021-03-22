module.exports = () => { return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>STUDENT ELIGIBILITY REPORT</title>
    <link rel="stylesheet" href="" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <style>
      .ar,
      p {
        font-family: Arial, Helvetica, sans-serif;
        margin: 2px;
      }
      * {
        line-height: 1;
        font-size: 15px;
      }

      .heading {
        font-family: "Times New Roman", Times, serif;
      }

      .big {
        font-size: 37px;
      }
      hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #000;
        margin: 0px;
        padding: 0;
      }
      .modhr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 4px solid #000;
        margin: 0px;
        padding: 0;
      }

      @media (max-width: 576px) {
        #logo {
          height: 35px;
          width: 35px;
        }

        #heading {
          font-size: 18px;
        }
        .big {
          font-size: 25px;
        }
        .form {
          font-size: 8px;
        }
        .side {
          font-size: 8px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container mt-2">
      <div class="row">
        <div class="my-2 col-2 d-flex">
          <img id="logo" src="or.png" height="50px" width="50px" />
        </div>
        <div class="col-8 d-flex justify-content-center text-center">
          <h3 class="heading" style="display: inline">
            <span class="big">S</span>TUDENT
            <span class="big">E</span>LIGIBILITY <span class="big">R</span>EPORT
          </h3>
        </div>
        <div class="mt-2 col-2 d-flex align-items-center flex-column">
          <h6 class="form">FORM 1</h6>
          <p class="side">SIDE 2</p>
        </div>
      </div>

      <div>
        <p class="mb-2">
          <b>Student-Athlete</b> - Please read the following prior to signing
          this form. If you have questions, please ask!
        </p>

        <ol style="text-align: justify">
          <li class="mb-2">
            I understand that in order to be eligible for intercollegiate
            competition, I must be continuously and actively enrolled and
            attending class in a minimum of 12 units at my community college
            during the season of sport, notwithstanding other articles/bylaws of
            the CCCAA Constitution and Bylaws. (Bylaw 1.3.1)
          </li>
          <p style="margin-left: 10px" class="mb-2">
            * Of the 12 units, at least 9 shall be attempted in courses counting
            toward remediation, career technical education/certificate courses,
            associate degree requirements, transfer/general education, and/or
            lower division theoretical major preparation courses as defined by
            the college catalog and/or articulation agreements and be consistent
            with my educational plan. The college shall certify that I have an
            individual educational plan on file. (Bylaw 1.3.1.B)
          </p>

          <li class="mb-2">
            I understand that actual competition in a scheduled game, meet, or
            match (except scrimmages for CCCAA purposes) during a sports season
            shall be recorded as one season of competition in that sport. (Bylaw
            1.5)
          </li>

          <li class="mb-2">
            In order to be eligible for the <b>second season of sport</b>, I
            must successfully complete and pass 24-semester/36-quarter units at
            an accredited postsecondary institution and complete a minimum 6
            units during my last full-time term*. The 24-semester/36-quarter
            unit count begins with and includes the units taken during the first
            semester/quarter of competition for that sport and must be completed
            <b>beginning of the semester/quarter</b> to the
            <b>beginning of the semester/quarter</b> of the second season of
            sport. Units from a course repeated to raise a grade of “D” or
            better <b>shall not be counted</b> to satisfy this
            second-season-of-sport unit eligibility rule. (Bylaw 1.6)
          </li>

          <p style="margin-left: 10px" class="mb-2">
            * Of the 24-semester/36-quarter units to be completed,
            18-semester/27-quarter units shall be in course work counting toward
            remediation, career technical education/certificate courses,
            associate degree requirements, transfer/general education, and/or
            lower division theoretical major preparation courses as defined by
            the college catalog and/or articulation agreements and be consistent
            with my educational plan. (Bylaw 1.6.1.2)
          </p>

          <li class="mb-2">
            I understand that once I have competed in a CCCAA-sanctioned sport,
            I must maintain a minimum cumulative 2.0 GPA and complete a minimum
            of 6 units during my last full-time term* to continue to be eligible
            for any sport.
          </li>

          <li class="mb-2">
            I understand that I may not and have not: participated or competed
            at another college during this season of sport and have not attended
            an intercollegiate athletic class. I also understand that as a
            member of a team sport, I may not compete/practice with any outside
            team in that sport during the season of that sport (See sports
            listed in Bylaw 3.7).
          </li>
          <li class="mb-2">
            I have never been paid for athletic competition, have never signed a
            professional contract and I am an amateur in this sport.
          </li>
          <li class="mb-2">
            I understand that I may <b>NOT</b> receive financial assistance
            (housing, jobs, transportation, etc.) or other special privileges
            for my participation in athletics.
          </li>
          <li class="mb-2">
            I understand that to be eligible to transfer and compete at an NCAA
            college I may need to register with the NCAA Eligibility Center and
            meet specific transfer requirements.
          </li>
          <li class="mb-2">
            <b>STATE DECORUM POLICY</b>—I understand the following offenses will
            result in the stated discipline plus any other sanctions deemed
            appropriate:
          </li>

          <ol type="A">
            <li class="mb-2">
              Ejection from a contest for language or unsportsmanlike conduct
              will result in suspension from the next scheduled contest.
            </li>
            <li class="mb-2">
              Second ejection from a contest in the same season will result in a
              suspension from all remaining contests.
            </li>
            <li class="mb-2">
              Physically assaulting or attempting to physically assault an
              official shall result in immediate ejection and the individual
              shall be suspended from participation in any CCCAA event for a
              period of sixty (60) months.
            </li>
            <li class="mb-2">
              Physically assaulting or attempting to assault anyone (other than
              an official) during an event will result in ejection from that
              contest and suspension from the next two contests.
            </li>
            <li class="mb-2">
              Leaving position or the bench/sidelines in reaction to an
              altercation, but not becoming physically involved will result in
              ejection from that contest and suspension from the next scheduled
              contest.
            </li>
            <li class="mb-2">
              The use or possession of any drugs, alcohol or tobacco will result
              in ejection from that contest and suspension from the next two
              contests.
            </li>
          </ol>

          <li class="mb-2">
            I authorize college authorities to release information about my
            athletic and academic records for the sole purpose of determining
            athletic eligibility, as well as my height, weight, and year in
            college.
          </li>

          <li class="mb-2">
            <b
              >My initials authorize the use and publication of my likeness by
              the CCCAA and its member institutions: Item 37
            </b>
          </li>
          <li class="mb-2">
            I understand that there are special rules for student-athletes. I
            understand and will abide by the above statements and all rules of
            athletic eligibility. Information falsely given or concealed by me
            will cause my college’s forfeitures of all games, meets, and/or
            matches in which I competed, and that I may be designated ineligible
            for further competition. If I do not agree with any item above, my
            explanation is attached to this form.
          </li>
          <li class="mb-2">
            My signature on the front of this form certifies that I have read
            and understand the above.
          </li>
        </ol>
      </div>
      <div>
        <p class="text-center" style="color: #123123">
          <b
            >*For those student-athletes whose first competition occurs Fall
            2015 and later</b
          >
        </p>
      </div>
    </div>

    <script
      src=""
      integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
` }

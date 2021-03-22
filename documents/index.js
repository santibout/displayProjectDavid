module.exports = (data) => {
  const today = new Date();
  const {
    communityCollege,
    athleticConference,
    sport,
    phoneNumber,
    fullName,
    streetAddress,
    cityStateZip,
    gender,
    studentId,
    currentDate,
    highSchool,
    highSchoolCityState,
    dob,
    ccountForTimesAfterHS,
    previousCommunityCollege,
    previousCommunityCollegeStartMonth,
    previousCommunityCollegeStartYear,
    hasAttendedAnotherCollege,
    secondCollegeAttended,
    secondCollegeName,
    secondCollegeStartMonthYear,
    secondCollegeStopMonthYear,
    hasAttendedAnotherCollege2,
  } = data;
  return `
  	 <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>STUDENT ELIGIBILITY REPORT</title>
    <link rel="stylesheet" href="">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <style>
  .ar , p{
    font-family: Arial, Helvetica, sans-serif;
    margin: 2px;
  }
  *{
    line-height: 1;
    font-size: 13px;
  }
  
  .heading{
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
  .modhr{
      display: block;
      height: 1px;
      border: 0;
      border-top: 4px solid #000;
      margin: 0px;
      padding: 0;
  
  }

  table.table-bordered{
  border:1px solid black;
  
    }

    .vl {
border-left: 6px solid green;
height: 500px;
}

  @media (max-width: 576px){
    #logo{
      height: 35px;
      width: 35px;
    }

    #heading{
      font-size:18px;
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
    <div class="container mt-2">
      <div class="row ">
        <div class="mt-2 col-2 d-flex justify-content-center">
          <img id="logo" src="./or.png" height="50px" width="50px">
          
        </div>
        <div class="col-8 d-flex justify-content-center text-center">
          <h3 class="heading" style="display:inline"><span class="big">S</span>TUDENT <span class="big">E</span>LIGIBILITY <span class="big">R</span>EPORT</h3>
        </div>
  
        <div class="mt-2 col-2 d-flex align-items-center flex-column">
          <h6 class="form">FORM 1</h6>
          <p class="side">SIDE 1</p>
        </div>
        
      </div>
      
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <b class="ar"><i>Please type or print neatly</i></b>
        </div>
        
      </div>
      <br>
      <br>
  
      
        <div class="row text-center mb-3">
        <div class="col-6 col-md-3 text-center mb-2">
          <p>Item1</p>
          <hr>
          <p>Your Present College</p>
        </div>
        <div class="col-6 col-md-3 mb-2">
          <p>Item2</p>
          <hr>
          <p>Your Present Conference</p>
        </div>
        <div class="col-6 col-md-3 mb-2">
          <p>Item3</p>
          <hr>
          <p>Sport This Season</p>
        </div>
        <div class="col-6 col-md-3 mb-2">
          <p>Previous Seasons of Competition Used in This Sport</p>
          <input type="checkbox" value="0"> 0 &nbsp; &nbsp; &nbsp; &nbsp;
  
      
          <input type="checkbox" value="1"> 1
  
        </div>
        </div>
  
        <div class="row mb-3">
        <div class="col-9 col-md-5 text-center mb-2 text-center">
          <p>Item4, Item4a, Item5a</p>
          <hr>
          <p>Last Name, First, MI</p>
        </div>
        <div class="col-3 col-md-1 mb-2">
          <input type="checkbox" value="male"> Male <br>
          <input type="checkbox" value="female"> Female
        </div>
        <div class="col-6 col-md-3 mb-2 text-center">
          <p>Item7</p>
          <hr>
          <p>Student ID#</p>
        </div>
        <div class="col-6 col-md-3 mb-2 text-center">
          <p>Item8</p>
          <hr>
          <p>Today's Date</p>
  
        </div>
        </div>
  
        <div class="row mb-3">
        <div class="col-12 col-md-6 text-center mb-2 text-center">
          <p>Item9, Item9a, Item9b, Item9c, Item9d</p>
          <hr>
          <p>Present Address, Street, City, State, Zip Code</p>
        </div>
        
        <div class="col-6 col-md-3 mb-2 text-center">
          <p>Item10</p>
          <hr>
          <p>Telephone #</p>
        </div>
        <div class="col-6 col-md-3 mb-2 text-center">
          <p>Item11</p>
          <hr>
          <p> Date of Birth</p>
  
        </div>
        </div>
  
        <div class="row mb-3">
        <div class="col-9 col-md-9 text-center mb-2 text-center">
          <p>Item12, Item12a, Item13b, Item13c </p>
          <hr>
          <p>High School Last Attended, City, State, Zip Code</p>
        </div>
        
        <div class="col-3 col-md-3 mb-2 text-center">
          <p>Item13</p>
          <hr>
          <p>Last Date Attended</p>
        </div>
        </div>
  
        <p>Accurately account for all your time between <b>high school graduation and the present</b>. Beginning with the year you left high school, list employment dates, periods of unemployment, armed forces service, and all educational institutions in which you have registered, including your present college. <b>Do</b> include summer school. <b>Do not</b> include summer jobs. </p>
  
        <hr class="modhr">
  
        <table class="table table-bordered text-center" width="100%">
          <tr>
            <td colspan="2" >From</td>
            <td colspan="2" >To</td>
            <td rowspan="2" class="pt-2">Colleges Attended or Jobs Held, City, State</td>
          </tr>
          <tr>
            <td>Mo</td>
            <td>Yr</td>
            <td>Mo</td>
            <td>Yr</td>
          </tr>
          <tr>
            <td>M1</td>
            <td>M2</td>
            <td>M3</td>
            <td>M4</td>
            <td>Item13</td>
          </tr>
          <tr>
            <td>D1</td>
            <td>D2</td>
            <td>D3</td>
            <td>D4</td>
            <td>Item14</td>
          </tr>
          <tr>
            <td>F1</td>
            <td>F2</td>
            <td>F3</td>
            <td>F4</td>
            <td>Item15</td>
          </tr>
          <tr>
            <td>J1</td>
            <td>J2</td>
            <td>J3</td>
            <td>J4</td>
            <td>Item16</td>
          </tr>
          
        </table>
        <p>Including this college and this season, list all of the colleges and sports in which you have <b>practiced, scrimmaged, or competed</b>, including <b>club sports, JV, and varsity contests</b> since high school: (If you only practiced or scrimmaged in a sport, please state.)</p>
  
        <table class="table table-bordered text-center" width="100%">
          <tr>
            <td>Sports</td>
            <td>College</td>
            <td>Varsity/JV/Club</td>
            <td>Semester</td>
            <td>Year</td>
          </tr>
          <tr>
            <td>Item17</td>
            <td>Item18</td>
            <td>Item19</td>
            <td>Item20</td>
            <td>Item21</td>
          </tr>
          <tr>
            <td>Item22</td>
            <td>Item23</td>
            <td>Item24</td>
            <td>Item25</td>
            <td>Item26</td>
          </tr>
          <tr>
            <td>Item27</td>
            <td>Item28</td>
            <td>Item29</td>
            <td>Item30</td>
            <td>Item31</td>
          </tr>
          <tr>
            <td>Item32</td>
            <td>Item33</td>
            <td>Item34</td>
            <td>Item35</td>
            <td>Item36</td>
          </tr>
        </table>
  
        <p><u><i>It is important to understand that while the season of competition has been waived for CCCAA student-athletes during the 2020-21 (Fall & Spring) sport seasons, you may not receive the same consideration with the NCAA.  Specifically, your additional season of competition at a California Community College may be considered as an additional year of competition by the NCAA.  The NAIA honors CCCAA waivers. <b>My signature certifies that the information I have given is true.</b> </i></u></p>
        <hr>
        <div class="container w-50">
        <div class="row">
          <div class="col align-self-center">
            <table class="table table-bordered" >
              <tr>
                <td></td>
                <td>10/12/20</td>
              </tr>
              <tr>
                <td>Student-Athlete’s Signature</td>
                <td>Date</td>
              </tr>
            </table>
          </div>
          
        </div>
        </div>
  
        <div class="text-center p-2 text-white" style="background-color:black">
          <i><b style="font-size:18px" class="heading">For Official Use Only</b></i>
          
        </div>
  
        <div class="row">
          <div class="col-md-6" style="border-right:1px solid black">
            <table class="table">
              <tr>
                <td></td>
                <td>Yes</td>
                <td>No</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>First Competition in any sport</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Enrolled in 12 units (Bylaw 1.3.1)</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Transcripts received</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Educational Plan on file</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Passed 24/36 semester/quarter units (Bylaw 1.6.1)</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Has a 2.0 GPA from first participation</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Meets the 6-unit requirement*  (Bylaw 1.3.3 or 1.6.1)</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Satisfies the transfer rule</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>Meets the 6-unit requirement for 2nd term of season*</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
              </tr>
            </table>
          </div>
            <div class="col-md-6 p-2 text-center">
                The signatures below verify this student’s eligibility to participate at this college
  
              <div class="row text-center">
                <div class="col-7">
                  <br><br>
                  <hr>
                  <p>Coach's Signature</p>
                </div>
              <div class="col-5">
                <br>
                20/3/21
                <hr>
                <p>Date</p>
              </div>
              </div>
  
              <br>
              <br>
              <div class="row text-center">
                <div class="col-7">
                  <br><br>
                  <hr>
                  <p>Athletic Director’s Signature</p>
                </div>
              <div class="col-5">
                <br>
                20/3/21
                <hr>
                <p>Date</p>
              </div>
              </div>
              
              <br>
              <br>
              <div class="row text-center mb-3">
                <div class="col-7">
                  <br><br>
                  <hr>
                  <p>Registrar/Administrative Rep’s Signature</p>
                </div>
              <div class="col-5">
                <br>
                20/3/21
                <hr>
                <p>Date</p>
              </div>
              </div>
              <hr>
              <p class="my-2">Tracers</p>
              <div class="row text-center mb-3">
                <div class="col-6">
                  <p>Sent Date(s) ___________</p>
                </div>
              <div class="col-6">
                <p>Recieved Date(s) ___________</p>
              </div>
              </div>
            </div>
          </div>
          
          
            
          <div class="row p-1" style="border:1px solid black">
            <div class="col-6" style="border-right:1px solid black">
              High School Recruitment Information (Check only one)
            </div>
            <div class="col-6">
              <input type="checkbox"> In-District	
              <input type="checkbox"> Recruiting Area	
              <input type="checkbox"> In-State	
              <input type="checkbox"> Out-of-State
            </div>
            
          </div>
          <div>
            
            <p class="text-center" style="color:#123123"><b>*For those student-athletes whose first competition occurs Fall 2015 and later</b></p>
          </div>
        </div>
    
  
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
  </body>
  </html>
    `;
};

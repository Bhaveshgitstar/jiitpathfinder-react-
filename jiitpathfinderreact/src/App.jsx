import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: "rgb(21, 22, 22)" }}
        id="myNavbar"
      >
        <a className="navbar-brand" href="#" id="logo">
          <img
            src="/logo.png"
            alt="hello"
            style={({ width: "1rem" }, { marginLeft: "1rem" })}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown" id="algorithms">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Algorithms
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Dijkstra
                </a>
              </div>
            </li>
            <li className="nav-item dropdown" id="floor">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Floors
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Floor 1
                </a>
                <a className="dropdown-item" href="#">
                  Ground floor
                </a>
              </div>
            </li>

            <li className="nav-item dropdown" id="startpoint">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Choose Start Point
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Staircase 1(Near Sarawasti Mandir)
                </a>
                <a className="dropdown-item" href="#">
                  Staircase 2(Near MPH)
                </a>
                <a className="dropdown-item" href="#">
                  Staircase 3(In front of cafeteria)
                </a>
                <a className="dropdown-item" href="#">
                  Staircase 4(Rightmost/Circular Staircase)
                </a>
                <a className="dropdown-item" href="#">
                  Room 111(CR-47/CR-1)
                </a>
                <a className="dropdown-item" href="#">
                  Room 113(CR-48/CR-2)
                </a>
                <a className="dropdown-item" href="#">
                  Room 116(CR-57/TR-1)
                </a>
                <a className="dropdown-item" href="#">
                  Room 127(TR-2/TR-12)
                </a>
                <a className="dropdown-item" href="#">
                  Room 117(LT-2/CR-39)
                </a>
                <a className="dropdown-item" href="#">
                  Room 118(LT-1/SR-05)
                </a>
                <a className="dropdown-item" href="#">
                  Room 126(TR-3/TR-13)
                </a>
                <a className="dropdown-item" href="#">
                  Room 121(TR-4/TR-14)
                </a>
                <a className="dropdown-item" href="#">
                  Room 123(CR-7/CR-28)
                </a>
                <a className="dropdown-item" href="#">
                  Room 150(CL-4/CR-59)
                </a>
                <a className="dropdown-item" href="#">
                  Room 151(CL-3/CR-60)
                </a>
                <a className="dropdown-item" href="#">
                  Room 142(ECE LAB/VLSI-LAB/PROJECT LAB,EL-17)
                </a>
                <a className="dropdown-item" href="#">
                  Room 140(CIC LAB/EL-25)
                </a>
                <a className="dropdown-item" href="#">
                  Room 138(CR-9/CR-55)
                </a>
                <a className="dropdown-item" href="#">
                  Room 137(CP-8/CR-71)
                </a>
                <a className="dropdown-item" href="#">
                  Room 134(ECE LAB/DSP LAB,EL-18)
                </a>
                <a className="dropdown-item" href="#">
                  Room 133(COMM. SYSTEM LAB,EL-20)
                </a>
                <a className="dropdown-item" href="#">
                  Room 157(ECE PROJECT LAB,EL-22)
                </a>
                <a className="dropdown-item" href="#">
                  Room 158(CSE PROJECT LAB,CL-37)
                </a>
                <a className="dropdown-item" href="#">
                  Room 132(MM LAB,CL-39)
                </a>
                <a className="dropdown-item" href="#">
                  Room 130(BASIC ELECTRONICS LAB,EL-21)
                </a>
                <a className="dropdown-item" href="#">
                  Room 148(LT-7/CR-44)
                </a>
                <a className="dropdown-item" href="#">
                  Room 153(LT-8/CR-55)
                </a>
                <a className="dropdown-item" href="#">
                  Toilet (Left)
                </a>
                <a className="dropdown-item" href="#">
                  Toilet (Right)
                </a>
                <a className="dropdown-item" href="#">
                  Faculty Block
                </a>
              </div>
            </li>
            <li className="nav-item dropdown" id="endpoint">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Choose End Point
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Staircase 1(Near Sarawasti Mandir)
                </a>
                <a className="dropdown-item" href="#">
                  Staircase 2(Near MPH)
                </a>
                <a className="dropdown-item" href="#">
                  Staircase 3(In front of cafeteria)
                </a>
                <a className="dropdown-item" href="#">
                  Staircase 4(Rightmost/Circular Staircase)
                </a>
                <a className="dropdown-item" href="#">
                  Room 111(CR-47/CR-1)
                </a>
                <a className="dropdown-item" href="#">
                  Room 113(CR-48/CR-2)
                </a>
                <a className="dropdown-item" href="#">
                  Room 116(CR-57/TR-1))
                </a>
                <a className="dropdown-item" href="#">
                  Room 127(TR-2/TR-12)
                </a>
                <a className="dropdown-item" href="#">
                  Room 117(LT-2/CR-39)
                </a>
                <a className="dropdown-item" href="#">
                  Room 118(LT-1/SR-05)
                </a>
                <a className="dropdown-item" href="#">
                  Room 126(TR-3/TR-13)
                </a>
                <a className="dropdown-item" href="#">
                  Room 121(TR-4/TR-14)
                </a>
                <a className="dropdown-item" href="#">
                  Room 123(CR-7/CR-28)
                </a>
                <a className="dropdown-item" href="#">
                  Room 150(CL-4/CR-59)
                </a>
                <a className="dropdown-item" href="#">
                  Room 151(CL-3/CR-60)
                </a>
                <a className="dropdown-item" href="#">
                  Room 142(ECE LAB/VLSI-LAB/PROJECT LAB,EL-17)
                </a>
                <a className="dropdown-item" href="#">
                  Room 140(CIC LAB/EL-25)
                </a>
                <a className="dropdown-item" href="#">
                  Room 138(CR-9/CR-55)
                </a>
                <a className="dropdown-item" href="#">
                  Room 137(CP-8/CR-71)
                </a>
                <a className="dropdown-item" href="#">
                  Room 134(ECE LAB/DSP LAB,EL-18)
                </a>
                <a className="dropdown-item" href="#">
                  Room 133(COMM. SYSTEM LAB,EL-20)
                </a>
                <a className="dropdown-item" href="#">
                  Room 157(ECE PROJECT LAB,EL-22)
                </a>
                <a className="dropdown-item" href="#">
                  Room 158(CSE PROJECT LAB,CL-37)
                </a>
                <a className="dropdown-item" href="#">
                  Room 132(MM LAB,CL-39)
                </a>
                <a className="dropdown-item" href="#">
                  Room 130(BASIC ELECTRONICS LAB,EL-21)
                </a>
                <a className="dropdown-item" href="#">
                  Room 148(LT-7/CR-44)
                </a>
                <a className="dropdown-item" href="#">
                  Room 153(LT-8/CR-55)
                </a>
                <a className="dropdown-item" href="#">
                  Toilet(Left)
                </a>
                <a className="dropdown-item" href="#">
                  Toilet(Right)
                </a>
                <a className="dropdown-item" href="#">
                  Faculty Block
                </a>
              </div>
            </li>
            <li className="nav-item dropdown" id="speed">
              <a
                className="nav-link dropdown-toggle speedDisplay"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Speed: Fast
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Slow
                </a>
                <a className="dropdown-item" href="#">
                  Normal
                </a>
                <a className="dropdown-item" href="#">
                  Fast
                </a>
              </div>
            </li>

            <button
              className="btn btn-default btn-space "
              type="submit"
              id="startBtn"
            >
              Start!
            </button>
            <button
              type="button"
              className="btn btn-dark btn-space "
              type="submit"
              id="clearBtn"
            >
              Clear Board
            </button>
            <li className="nav-item dropdown" id="about us">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  This Project is made by:
                  <br />
                  <br />
                  Bhavesh Sharma
                  <br />
                  Nikunj Garg
                  <br />
                  Hrishit Pandey
                  <br />
                  Prateek Srivastva
                  <br />
                  <br />
                  Under supervision of Prof. Varsha Garg and Jiit CSE
                  department.
                </a>
              </div>
            </li>
          </ul>
        </div>
        ]
      </nav>

      <div className="d-flex flex-row flex-wrap m-2 justify-content-around">
        <div className="d-flex p-2">
          <div className="key wall"></div>
          <div className="Wall"> Wall</div>
        </div>
        <div className="d-flex p-2">
          <div className="key start"></div>
          <div className="Srt">Start</div>
        </div>
        <div className="d-flex p-2">
          <div className="key end"></div>
          <div className="tar">Target</div>
        </div>
        <div className="d-flex p-2">
          <div className="key searching"></div>
          <div className="key visited"></div>
          <div className="vis">Visited</div>
        </div>
        <div className="d-flex p-2">
          <div className="key success"></div>
          <div className="SP">Shortest-Path</div>
        </div>
        <div className="d-flex p-2">
          <div className="key unvisited"></div>
          <div className="unvis">Unvisited</div>
        </div>
      </div>

      <div
        className="d-flex flex-column align-items-center"
        id="bigTableContainer"
      >
        <div id="tableContainer"></div>
        {/* <!-- <div id="update">Click or drag cells to build walls. <br/>Press the 'Start' button when you finish and have selected an algorithm.</div> --> */}
      </div>
      <div id="tutorial" className="align-items-center">
        {/* 		
		<!-- <div id="tutorialCounter">1/9</div>
		<img id="mainTutorialImage" src="public/styling/c_icon.png"> --> */}
        <h3>Welcome to Path Finder(College Map)</h3>
        <img src="images/logo.png" width="320" alt="logo" className="center" />

        <h6>These are few instructions to use this application:</h6>
        <p>
          Choose any algorithm
          <br />
          Choose floor by clicking on floors <br />
          Then click on Choose start button to choose your nearest location and
          click on Choose End Point to enter your destination
          <br />
          Click on start button to get the path between start node and end node
          <br />
          Click on clear board button to clear the board
        </p>

        <button
          id="skipButton"
          className="btn btn-default navbar-btn"
          data-toggle="model"
          type="button"
        >
          Close Instructions
        </button>
      </div>

      <div className="d-flex flex-column" id="results">
        <div className="d-flex justify-content-center">
          <i id="resultsIcon" className="fas fa-exclamation"></i>
        </div>
        <div id="duration">Please select an algorithm and press start.</div>
        <div id="length" className="d-flex justify-content-center"></div>
      </div>
    </>
  );
};

export default App;

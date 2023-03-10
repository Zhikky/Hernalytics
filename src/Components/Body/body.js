import React from "react";
import "./body.scss";
import Map from "./Map/map";

function Body(props) {

  // let labour = props.data[0].political_party_name;
  console.log(props.stateResult);
  return (
    <div className="body">
      <div className="header-container">
        <h3>Post Election Data</h3>
        <div>
          <p>PRESIDENTIAL / 2023</p>
        </div>
      </div>

      <div className="body-content">
        <div>
          <div className="body-title">
            <h4>Presidential Race</h4>
          </div>

          <div className="filter-container">
            <input type="checkbox" id="toggler3" />
            <label for="toggler3">
              <p>Election Data</p>
              <i class="fa-solid fa-chevron-down"></i>
            </label>
            <ul class="dropdown-menu3">
              <li>
                <p>Pre-Election</p>
              </li>
              <li>
                <p>Election Day Live Updates</p>
              </li>
              <li>
                <p>Post-Election Analysis</p>
              </li>
            </ul>

            <input type="checkbox" id="toggler4" />
            <label for="toggler4">
              <p>Presidential</p>
              <i class="fa-solid fa-chevron-down"></i>
            </label>
            <ul class="dropdown-menu4">
              <li>
                <p>Presidential</p>
              </li>
              <li>
                <p>Gubernatorial</p>
              </li>
              <li>
                <p>Senate</p>
              </li>
              <li>
                <p>House of Representatives</p>
              </li>
            </ul>

            <label for="toggler5">
              <p>2023</p>
              <i class="fa-solid fa-chevron-down"></i>
            </label>
          </div>
        </div>

        <div className="vote-container">
          <h3>PRESIDENT</h3>
          <div>
            <div className="president1">
              <div></div>
              {props.data.length > 0 ? (
                <div>
                  <p className="name">
                    {props.data[0].full_name}, {""}
                    {props.data[0].political_party_name}
                  </p>
                  <p className="votes">{props.data[0].candidates_vote} votes</p>
                </div>
              ) : (
                <p></p>
              )}
            </div>
            <div className="president2">
              <div></div>
              {props.data.length > 0 ? (
                <div>
                  <p className="name">
                    {props.data[1].full_name}, {""}
                    {props.data[1].political_party_name}
                  </p>
                  <p className="votes">{props.data[1].candidates_vote} votes</p>
                </div>
              ) : (
                <p></p>
              )}
            </div>
            <div className="president3">
              <div></div>
              {props.data.length > 0 ? (
                <div>
                  <p className="name">
                    {props.data[2].full_name}, {""}
                    {props.data[2].political_party_name}
                  </p>
                  <p className="votes">{props.data[2].candidates_vote} votes</p>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>

        <div className="map-container">
          <div>
            <Map data={props.stateResult}/>

            <div className="map-toggle">
              <div className="zoom-buttons">
                <button>
                  <i class="fa-solid fa-plus"></i>
                </button>

                <button>
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>

              <div className="legend-party">
                <div className="apc">
                  <div></div>
                  <p>APC</p>
                </div>
                <div className="lp">
                  <div></div>
                  <p>LP</p>
                </div>
                <div className="pdp">
                  <div></div>
                  <p>PDP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="analysis-container">
          <div className="analysis-title">
            <h4>State Results</h4>
          </div>

          <div className="analysis-content">
            <table>
              <thead>
                <tr>
                  <th>State</th>
                  <th>LP</th>
                  <th>PDP</th>
                  <th>APC</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(props.stateResult).map((stateName) => (
                  <tr key={stateName}>
                    <td>{stateName}</td>
                    {props.stateResult[stateName].map((item, index) => (
                      <td key={index}>{item.candidate_votes}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;

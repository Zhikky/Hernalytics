import React, { useState, useEffect } from "react";

// Importing Section Components
import Body from "./Body/body";
import Navbar from "./NavBar/navbar";
import Footer from "./Footer/footer";

function Home() {
  const [data, setData] = useState([]);
  const [stateResult, setStateResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        const stateResult = await response.json();
        setStateResult(stateResult);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(stateResult);
  console.log(data);

  return (
    <div>
      {/* Navigation bar Component */}
      <section className="navbar-container">
        <Navbar />
      </section>

      {/* Body Section containing map and other details */}
      <section className="body-container">
        <Body data={data} stateResult={ stateResult}/>
      </section>

      {/* Footer Component */}
      <section className="footer-container">
        <Footer />
      </section>
    </div>
  );
}

export default Home;

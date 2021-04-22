import React, { useState, useEffect } from "react";
import axios from "axios";
import './opinion.css';

const Opinions = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    const getOpinions = async () => {
      const res = await axios.get("/opinions");
      setOpinions(res.data.opinions);
    };

    getOpinions();
  }, []);

  return (
    <div className="opinions-general">
      <div className="opinions">
        {opinions.map((opinion, key) => {
          return (
            <div className="cards-opinions" key={key}>
              <div className="content-opinion">
                <h1>{opinion.title}</h1>
                <hr />
                <p>{opinion.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Opinions;

import React from "react";
import game1 from "../../../image/game1.jpeg";
import game2 from "../../../image/game2.jpeg";
import game3 from "../../../image/game3.jpeg";
import game4 from "../../../image/game4.jpeg";
import game5 from "../../../image/game5.jpeg";
import "./games.css";

const Games = () => {
  return (
    <div>
      <div className="bg-games">
        <h1>Games</h1>
      </div>
      <div className="view-game">
        <div className="img-bg">
          <img src={game4} alt="" />
        </div>
        <div className="content-view-game">
          <h1>EA SPORTS FIFA 21</h1>
          <p>
            Feel Next Level in FIFA 21 on PlayStation 5 with new technology like
            blazing fast load times, off-ball humanization, and controller
            haptics that takes The World’s Game from visual to visceral.
          </p>
        </div>
      </div>
      <div className="games-cards">
        <div className="cards-g">
          <img className="img" src={game1} alt="" />
          <h1>Horizon Forbidden West</h1>
          <p>
            Join Aloy as she braves the Forbidden West - a majestic but
            dangerous frontier that conceals mysterious new threats.
          </p>
        </div>
        <div className="cards-g">
          <img className="img" src={game2} alt="" />
          <h1>Ratchet & Clank: Rift Apart</h1>
          <p>
            Blast your way through an interdimensional adventure with Ratchet
            and Clank.
          </p>
        </div>
        <div className="cards-g">
          <img className="img" src={game3} alt="" />
          <h1>Gran TurismoTM 7</h1>
          <p>
            Gran Turismo 7 builds on 22 years of experience to bring you the
            best features from the history of the franchise.
          </p>
        </div>
      </div>
      <div className="view-game">
        <div className="img-bg">
          <img src={game5} alt="" />
        </div>
        <div className="content-view-game">
          <h1>NBA 2K21</h1>
          <p>
            Built from the ground up for the next generation of gaming, NBA 2K21
            for PlayStation 5 is the latest title in the world-renowned,
            best-selling NBA 2K series and delivers an industry-leading sports
            video game experience.
          </p>
        </div>
      </div>
      <footer>&copy; 2021</footer>
    </div>
  );
};

export default Games;

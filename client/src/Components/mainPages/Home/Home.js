import React from 'react';
import Opinions from '../Utils/Opinions/Opinions';
import bg from '../../../image/pas5black.jpg';
import cd from '../../../image/with-CD.png';
import nocd from '../../../image/without-CD.png'
import './home.css';

const Home = () => {
    return (
        <div>
            <div className="bg">
                <img className="img" src={bg} alt=""/>
            </div>
            <div className="content-home">
                <div className="left-zone">
                    <div className="onez">
                        <h1>PS5 Without disc drive</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore laboriosam eaque repellat tempora sed quam magnam dolorem amet? Necessitatibus at eveniet quae unde, qui corporis quis modi quibusdam minima deserunt?</p>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti iure obcaecati voluptate, assumenda unde ad id, repellat accusantium natus repellendus nisi, commodi provident et vel in asperiores velit molestiae.</p>
                    </div>
                    <div className="twoz">
                        <img className="image" src={nocd} alt=""/>
                    </div>
                </div>
                <div className="rigth-zone">
                    <div className="onez">
                        <h1>PS5 Without disc drive</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore laboriosam eaque repellat tempora sed quam magnam dolorem amet? Necessitatibus at eveniet quae unde, qui corporis quis modi quibusdam minima deserunt?</p>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti iure obcaecati voluptate, assumenda unde ad id, repellat accusantium natus repellendus nisi, commodi provident et vel in asperiores velit molestiae.</p>
                    </div>
                    <div className="twoz">
                        <img className="image" src={cd} alt=""/>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="title-opinion">Opinions</h1>
                <Opinions />
            </div>
            <footer>&copy; 2021</footer>
        </div>
    )
}

export default Home

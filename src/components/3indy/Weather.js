import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    // 상태 변수 정의
    constructor(props) {
        super(props);
        this.state = { temp: 0, desc: '', icon: '', loading: true };
    }
    // 컴포넌트 생성 후 날씨 정보 조회
    componentDidMount() {
        const cityName = 'Seoul';
        const apiKey = 'ea53b6f001e4d38c68b87795ddeea08f';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        axios
            .get(url)
            .then((responseData) => {
                console.log(responseData);
                const data = responseData.data;
                this.setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false,
                });
            })
            .catch((error) => console.log(error));
    }
    // 날씨 정보 출력
    render() {
        const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        if (this.state.loading) {
            return <p>Loading</p>;
        } else {
            return (
                <div className="App">
                    <div className="bg-white mx-6 py-6 text-xl underline rounded-xl">
                        <img alt="" src={imgSrc} className="mx-auto w-32" />
                        <div>Weather : {this.state.desc}</div>
                        <div>
                            Celsius : {(this.state.temp - 273.15).toFixed(1)}°C
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;

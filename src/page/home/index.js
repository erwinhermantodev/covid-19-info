import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.css';

class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        sliders: [],
        confirmed : 0,
        recovered: 0,
        deaths: 0,
        confirmedID : 0,
        recoveredID: 0,
        deathsID: 0,
        imgHeight: 176,
    }
    componentDidMount() {
        const urlFetch = fetch('https://corona.lmao.ninja/all')
        urlFetch.then( res => {
            if(res.status === 200)
               return res.json()   
            }).then( resJson => {
            this.setState({
                confirmed: JSON.parse(resJson.cases),
                recovered: JSON.parse(resJson.recovered),
                deaths: JSON.parse(resJson.deaths),
            })
        })

        const urlFetchID = fetch('https://corona.lmao.ninja/countries/Indonesia')
        urlFetchID.then( res => {
            if(res.status === 200)
               return res.json()   
            }).then( resJson => {
            this.setState({
                confirmedID: JSON.parse(resJson.cases),
                recoveredID: JSON.parse(resJson.recovered),
                deathsID: JSON.parse(resJson.deaths),
            })
        })

        const requestOptions = {
            method: 'GET',
            headers: {
              'apiKey': process.env.REACT_APP_WEB_KEY
            }
          };
          fetch(`${process.env.REACT_APP_API_URL_HOST}/list-slider`, requestOptions)
            .then(
              res => res.json()
            )
            .then(sliders => {
              this.setState({
                sliders: sliders.data.slider
              })
            }
        );
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        const {confirmed, recovered, deaths} = this.state
        const {confirmedID, recoveredID, deathsID} = this.state
        const sliders = this.state.sliders;

        return (
            <div>
                <WingBlank>
                    <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {sliders.map((slider, index) => (
                        <a
                        key={slider.id}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={slider.image}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <div className="sub-title" style={{ marginTop: '5px'}}>Data Keseluruhan</div>
                <div className="sub-title" style={{ marginTop: '5px', height:'100px', backgroundColor: 'white', paddingTop: '20px'}}>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'x-large'}}>{confirmed}</span>
                        <br/>
                        <span>Positive</span>
                    </div>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'x-large', color:'green'}}>{recovered}</span>
                        <br/>
                        <span style={{ color:'green'}}>Sembuh</span>
                    </div>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'x-large', color:'red'}}>{deaths}</span>
                        <br/>
                        <span style={{ color:'red'}}>Meninggal</span>
                    </div>
                </div>
                <div className="sub-title" style={{ marginTop: '5px'}}>Data Di Indonesia</div>
                <div className="sub-title" style={{ marginTop: '5px', height:'100px', backgroundColor: 'white', paddingTop: '20px'}}>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'xx-large'}}>{confirmedID}</span>
                        <br/>
                        <span>Positive</span>
                    </div>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'xx-large', color:'green'}}>{recoveredID}</span>
                        <br/>
                        <span style={{ color:'green'}}>Sembuh</span>
                    </div>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'xx-large', color:'red'}}>{deathsID}</span>
                        <br/>
                        <span style={{ color:'red'}}>Meninggal</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

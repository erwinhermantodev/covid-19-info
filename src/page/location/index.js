import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import './index.css';

const { Option } = Select;

class Location extends Component {
    constructor(props) {
        super(props);
      }
    
      state = {
        data: [],
        confirmed : 0,
        recovered: 0,
        deaths: 0,
      };
    
      componentDidMount() {
        const urlFetch = fetch('https://corona.lmao.ninja/countries/')
        urlFetch.then( res => {
            if(res.status === 200)
               return res.json()   
            }).then( resJson => {
            this.setState({
                data: resJson
            })
        })
    }
    
      onChange = value => {
        const urlFetch = fetch(`https://corona.lmao.ninja/countries/${value}`)
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
        console.log(`selected ${value}`);
      }
      
      onBlur = () => {
        console.log('blur');
      }
      
        onFocus = () => {
        console.log('focus');
      }
      
       onSearch = val => {
        console.log('search:', val);
      }
    render() {
        const { data } = this.state;
        const {confirmed, recovered, deaths} = this.state

        return (
            <div style={{ marginTop: '10px'}}>
                <Select
                    showSearch
                    style={{ width: '98%' }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {data.map(countries => (
                        <Option key={countries.country}>{countries.country}</Option>
                    ))}
                </Select>
                <div className="sub-title" style={{ marginTop: '5px'}}>Data Keseluruhan</div>
                <div className="sub-title" style={{ marginTop: '5px', height:'100px', backgroundColor: 'white', paddingTop: '20px'}}>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'xx-large'}}>{confirmed}</span>
                        <br/>
                        <span>Positive</span>
                    </div>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'xx-large', color:'green'}}>{recovered}</span>
                        <br/>
                        <span style={{ color:'green'}}>Sembuh</span>
                    </div>
                    <div style={{width: '33%',float: 'left', height: '100%', textAlign:'center'}}>
                        <span style={{ fontSize: 'xx-large', color:'red'}}>{deaths}</span>
                        <br/>
                        <span style={{ color:'red'}}>Meninggal</span>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Location;

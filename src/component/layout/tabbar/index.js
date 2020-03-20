import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from '../../../page/home';
import Location from '../../../page/location';
import Tips from '../../../page/tips';

class Tabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home',
          hidden: false,
          fullScreen: false,
        };
      }
    
      renderContent(pageText) {
            let page = <Home/>;
            if (pageText === 'Home') {
                page = <Home/>;
            } else if (pageText === 'Location') {
                page = <Location/>;
            } else if (pageText === 'Tips') {
                page = <Tips/>;
            }
            return (
                <div style={{ height: '100%', textAlign: 'center', paddingTop: '45px', backgroundColor:'whitesmoke' }}>
                    {page}
                </div>
            );
      }
    
      render() {
        return (
          <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="Home"
                key="Home"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://www.flaticon.com/premium-icon/icons/svg/2679/2679328.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://www.flaticon.com/premium-icon/icons/svg/2679/2679399.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'home'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'home',
                  });
                }}
                data-seed="logId"
              >
                {this.renderContent('Home')}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://image.flaticon.com/icons/svg/684/684809.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://image.flaticon.com/icons/svg/684/684908.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="Location"
                key="Location"
                selected={this.state.selectedTab === 'location'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'location',
                  });
                }}
                data-seed="logId1"
              >
                {this.renderContent('Location')}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://image.flaticon.com/icons/svg/2227/2227998.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://image.flaticon.com/icons/svg/2227/2227872.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="Tips"
                key="Tips"
                selected={this.state.selectedTab === 'tips'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'tips',
                  });
                }}
              >
                {this.renderContent('Tips')}
              </TabBar.Item>
            </TabBar>
          </div>
        );
        }
}

export default Tabbar;
import React, { Component } from 'react';
import { NavBar  } from 'antd-mobile';
import styles from './index.css';


class Navbar extends Component {
    render() {
        return (
        <div className={styles.Navbar}>
            <NavBar
            mode="light"
            >
                <img style={{height : '100%'}} src="https://res.cloudinary.com/twelvehouse-id/image/upload/v1584662143/coronavirus_onca8f.png" />
                Covid-19 Info
            </NavBar>
        </div>
        );
    }
}

export default Navbar;

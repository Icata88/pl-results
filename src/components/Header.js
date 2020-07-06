import React from 'react';
import { Row, Col } from 'antd';
import header from '../images/header.jpg';

export const Header = () => {
    const bgImage = { backgroundImage: 'url(' + header + ')'}
    return (
        <div style={bgImage} className='Header'></div>
    );
}
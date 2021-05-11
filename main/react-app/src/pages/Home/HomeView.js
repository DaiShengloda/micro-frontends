import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center',marginTop: '30px',fontSize: '30px'}}>
                主应用页面
            </div>
        )
    }
}

export default Home
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
    return (<div 
        className="box"
        style={{
            backgroundColor: this.state.backgroundColor,
            borderWidth: this.state.borderWidth,
            borderColor: this.state.borderColor,
            borderStyle: this.state.borderStyle,
            opacity: this.state.opacity,
            width: this.state.width,
            height: this.state.height,
        }}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        ></div>);
    }

    handleMouseEnter() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const colorString = `rgb(${r}, ${g}, ${b})`;
        this.setState({backgroundColor: colorString});
        this.setState({borderWidth: '3px'});
        this.setState({width: '94px'});
        this.setState({height: '94px'});
        this.setState({opacity: '0.5'});
    }

    handleMouseLeave() {
        this.setState({borderWidth: '0px'});
        this.setState({width: '100px'});
        this.setState({height: '100px'});
    }
}

class Grid extends React.Component {
    render() {
        const boxes = Array(100).fill(null);
        return (
            <div className="grid">
                {boxes.map((box) => <Box />)}
            </div>
        );
    }
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
);
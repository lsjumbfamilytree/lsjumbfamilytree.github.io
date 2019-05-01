import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Graph from './Graph';
import {Constants} from '../utils/Constants';
import {CESpec} from '../utils/CESpec';
import {CSSpec} from '../utils/CSSpec';
import {MatSciSpec} from '../utils/MatSciSpec';
import {MESpec} from '../utils/MESpec';
import {MSESpec} from '../utils/MSESpec';

export default class Selection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: this.props.show,
            specSheet: this.props.specName || '',
            track: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        let major = this.state.major.trim(),
            theSpec = _.get(Constants.spec, major);
        if(theSpec){
            this.setState({show: !this.state.show, specSheet: theSpec});
        }
    }

    handleMajorChange = (e) => {
        this.setState({major: e.target.value});
    }

    handleTrackChange = (e) => {
        this.setState({track: e.target.value});
    }

    getSpecSheet = () => {
        let spec = this.state.specSheet;
        if(spec === "CESpec"){
            return CESpec.navSpecs;
        }
        else if(spec === "CSSpec"){
            return CSSpec.navSpecs;
        }
        else if(spec === "MatSciSpec"){
            return MatSciSpec.navSpecs;
        }
        else if(spec === "MESpec"){
            return MESpec.navSpecs;
        }
        else if(spec === "MSESpec"){
            return MSESpec.navSpecs;
        }
        //If we ever get here, there's a problem.
        else{
            return null;
        }
    }

    render(){
        if(this.state.show){
            return (
            <div className="search">
                <div className="content">
                    <img id="frontpageimage" src="../../images/stanford.png" />
                </div>
                <div className="content">
                    <p>Choose your major from the dropdown list.</p>
                </div>
                <div className="content">
                    <p>Click "Create Graph" to construct a graph of major requirements for your selected major. </p>
                </div>
                <div className="content">
                    <p>Hover over nodes or arrows to learn more. </p>
                </div>
                <div className="content">
                    <p>Click on nodes to either be taken to course reviews or to gather more information regarding allowed classes for a major.</p>
                </div>
                <div className="content">
                    <input className="content" type="text" placeholder="Major" list="major" id="searchbar" onChange={this.handleMajorChange} />
                    <datalist id="major">
                        <option value="Chemical Engineering" />
                        <option value="Computer Science" />
                        <option value="Management Science and Engineering" />
                        <option value="Materials Science and Engineering" />
                        <option value="Mechanical Engineering" />
                    </datalist>
                    <input type="submit" value="Create Graph" onClick={this.handleClick} />
                </div>
            </div>
            );
        }
        else{
            return (<Graph spec={this.getSpecSheet()} specName={this.state.specSheet} constants={Constants.webpage} />);
        }
    }
}

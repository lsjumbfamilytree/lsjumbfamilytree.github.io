import React from 'react';
import ReactDOM from 'react-dom';
import ForceDirectedGraph from '../utils/ForceDirectedGraph';
import Selection from './Selection';

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            refresh: false,
            colorTip: false
        }
    }

    componentDidMount() {
        this.graph = new ForceDirectedGraph(this.props.spec, this.props.constants, 25);
        this.graph.buildBidirectionalGraph();
    }

    handleClick = (e) => {
        e.preventDefault();
        this.graph.deconstructGraph();
        if(e.target.value === this.props.constants.exit) {
            this.setState({show: false});
        }
        else {
            this.setState({show: false, refresh: true})
        }
    }

    keyChange = (e) => {
        e.preventDefault();
        this.setState({colorTip: !this.state.colorTip});
    }

    render() {
        if(this.state.show){
            if(this.state.colorTip) {
                //TODO: add corequisites page
                //TODO: add this later: (NOTE: There are different kinds of corequisites. Click here for more information.)
                return (
                    <div>
                        <div className="toolbar">
                            <input type="submit" value={this.props.constants.refresh} onClick={this.handleClick} />
                            <input type="submit" value={this.props.constants.colorHide} onClick={this.keyChange} />
                            <input type="submit" value={this.props.constants.exit} onClick={this.handleClick} />
                        </div>
                        <div className="key">
                            <p> Colors are listed in order from highest precedence to lowest. If a node fulfills two or
                                more of the following, the node will have the color of the highest precedence color. </p>
                            <p> <span id="green">Green nodes</span> represent classes that have no prerequisites. Begin here when making long-term course plans.</p>
                            <p> <span id="yellow">Yellow nodes</span> represent classes that are prerequisites for major required classes but
                                are not explicit required classes themselves. Many of these classes, however, can be counted towards the major.</p>
                            <p> <span id="purple">Purple nodes</span> represent classes that fulfill major requirements, but there are also other classes
                                that fulfill the same requirement. Look for the <span id="purple">purple nodes</span> that have a bidirectional
                                connection to find the classes that fulfill the same requirement.</p>
                            <p> <span id="cyan">Cyan nodes</span> represent classes that have a corequisite. Hover over arows pointing to
                                <span id="cyan"> cyan nodes </span> to see which classes are corequisites for that class. </p>
                            <p> <span id="gray"> Gray nodes</span> represent classes that have no special or noteworthy cases. </p>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="toolbar">
                        <input type="submit" value={this.props.constants.refresh} onClick={this.handleClick} />
                        <input type="submit" value={this.props.constants.colorShow} onClick={this.keyChange} />
                        <input type="submit" value={this.props.constants.exit} onClick={this.handleClick} />
                    </div>
                );
            }
        }
        else if(this.state.refresh){
            return <Selection show={false} specName={this.props.specName} />
        }
        else{
            return <Selection show={true} specName={null} />;
        }
    }
}

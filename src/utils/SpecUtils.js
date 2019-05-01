import _ from 'lodash';

export default class SpecUtils {

    constructor(spec, radius) {
        this.spec = spec;
        this.graph = this.specTransformer(this.spec);
        this.radius = radius;
        this.nodeSize = this.cacheNodeConnections();
    }

    /**
     * Takes in a Spec and translates it to a structure where D3 can consume
     * it.
     * @param  {JS Object} spec The navigation spec
     * @return {JS Object}      The massaged structure
     */
    specTransformer(spec) {
        return spec.reduce((accum, item) => {
            accum.push({
                'number': item.number,
                'name': item.name || '',
                'description': item.description || '',
                'units': item.units || "N/A",
                'site': item.site || '',
                'type': item.id || 'noType',
                // 'meta': {
                    // 'url': item.url,
                    // 'state': item.state
                // },
                'links': this.resolveTransitions(item, item.transitions)
            });
            return accum;
        }, []);
    }

    /**
     * gets the number of incoming connections to a named node.
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    getNumOfLinksByName(name) {
        return this.nodeSize[name];
    }

    /**
     * Returns the radius of the node
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    getNodeRadius(name) {
        return name ? this.nodeSize[name] * this.radiusScalar : this.radiusScalar;
    }

    /**
     * Creates and caches the number of incoming connections per node to be
     * used for the radius of reach node.
     * @return {[void]} Returns nothing.
     */
    cacheNodeConnections() {
        let numOfConnections = {};
        this.graph.map((node) => {
            numOfConnections[node.number] = numOfConnections[node.number] ? numOfConnections[node.number] : 1; //every node is connected to itself
            node.links.map((link) => {
                numOfConnections[link.d3.target] = numOfConnections[link.d3.target] ? numOfConnections[link.d3.target] + 1 : 1;
            });
        });
        return numOfConnections;
    }

    /**
     * Creates the links of a particular node
     * @param  {[type]} sourceName  [description]
     * @param  {[type]} sourceIndex [description]
     * @param  {[type]} transitions [description]
     * @return {[type]}             [description]
     */
    resolveTransitions(node, transitions, parentNode) {
      // let rand = _.get(this.spec[0], 'id'); === invisible
        return transitions.reduce((accum, item) => {
            accum.push({
                'd3': {
                    'source': node.number,
                    'target': item.escalate ? parentNode.number : item.to,
                    'sourceType': node.id || 'noType',
                    'toType': item.toType || 'noType',
                    'action': item.action || ''
                }
            });
            return accum;
        }, []);
    }

    /**
     * Returns the transitions in a structure that D3 can consume.
     * @param  {[type]} transformedSpec [description]
     * @return {[type]}                 [description]
     */
    getD3Links() {
        return this.graph.reduce(function(accum, item) {
            // let arr = [item.description];
            Array.prototype.push.apply(accum, item.links.reduce((transitions, transition) => {
                transitions.push(transition.d3);
                return transitions;
            }, []));
            return accum;
        }, []);
    }

    getSites() {
        const theSites = {};
        this.graph.forEach(function(item){
            theSites[item.number] = item.site;
        });
        return theSites;
    }

    getDescriptions() {
        const theDescriptions = {};
        this.graph.forEach(function(item){
            theDescriptions[item.number] = item.description;
        });
        return theDescriptions;
    }

    getUnits() {
        const theUnits = {};
        this.graph.forEach(function(item) {
            theUnits[item.number] = item.units;
        });
        return theUnits;
    }

    getNames() {
        const theNames = {};
        this.graph.forEach(function(item) {
            theNames[item.number] = item.name;
        });
        return theNames;
    }
}

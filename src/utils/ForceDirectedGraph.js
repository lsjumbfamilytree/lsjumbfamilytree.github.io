import SpecUtils from './SpecUtils';

export default class ForceDirectedGraph {

    static SpecUtils;
    static Constants;

    constructor(spec, constants, radius) {
        ForceDirectedGraph.SpecUtils = new SpecUtils(spec, radius);
        ForceDirectedGraph.Constants = constants;
    }

    buildBidirectionalGraph() {
        const radius = ForceDirectedGraph.SpecUtils.radius;
        let nodes = {};
        const links = ForceDirectedGraph.SpecUtils.getD3Links(),
            descriptions = ForceDirectedGraph.SpecUtils.getDescriptions(),
            units = ForceDirectedGraph.SpecUtils.getUnits(),
            names = ForceDirectedGraph.SpecUtils.getNames(),
            sites = ForceDirectedGraph.SpecUtils.getSites();

        // Compute the distinct nodes from the links.
        links.forEach(function(link) {
            if (nodes[link.source]) {
                link.source = nodes[link.source];
                if (link.sourceType && !_.get(nodes[link.source], 'type')) {
                    nodes[link.source.number].type = link.sourceType;
                }
            } else {
                link.source = nodes[link.source] = {
                    number: link.source,
                    name: names[link.source],
                    type: link.sourceType,
                    description: descriptions[link.source],
                    site: sites[link.source],
                    units: units[link.source]
                };
            }
            link.target = nodes[link.target] || (nodes[link.target] = {
                number: link.target,
                name: names[link.target],
                type: link.toType,
                description: descriptions[link.target],
                site: sites[link.target],
                units: units[link.target]
            });
        });

        const width = window.innerWidth,
            height = window.innerHeight,
            margin = {top: -5, right: -5, bottom: -5, left: -5};

        const zoomed = () => {
            container.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
        };

        let zoom = d3.behavior.zoom()
            .scaleExtent([1, 10])
            .on('zoom', zoomed);

        let svg = d3.select('body').append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.right + ')')
            .call(zoom);

        let rect = svg.append('rect')
            .attr('width', width)
            .attr('height', height)
            .style('fill', 'none')
            .style('pointer-events', 'all');

        //TODO:Change lister html formatting
        let nodeTip = d3.tip()
            .attr('class', 'nodeTip')
            .offset([-10, 0])
            .html(function (d) {
                if(d.type !== "lister") {
                    const course = `<div class="fistLine"> <strong> Course: </strong> ${d.name} </div>`;
                    const units = `<div> <strong> Units: </strong> ${d.units} </div>`;
                    let description = "<div> <strong> Description: </strong> ",
                        temp = d.description,
                        charLimit = 86;
                    while(temp.length > charLimit){
                        let index = temp.indexOf(" ", charLimit);
                        if(index > -1) {
                            let str = temp.substring(0, index);
                            description = description + str + "<br>";
                            temp = temp.substring(index);
                        }
                        else {
                            description = description + temp + "<br>";
                            temp = "";
                        }
                        charLimit = 100;
                    }
                    description = description + temp + "</div>";
                    return course + units + description;
                }
                else {
                    // let description = `<div> The following classes can fulfill the ${d.name} requirement.<br>`;
                    // return description;
                    const charLimit = 100;
                    let temp = d.description,
                        ulIndex = temp.indexOf("<ul>"),
                        description = "";
                    if(ulIndex > -1) temp = temp.substring(0, ulIndex);

                    while(temp.length > charLimit){
                        let index = temp.indexOf(" ", charLimit);
                        if(index > -1) {
                            let str = temp.substring(0, index);
                                description = description + str + "<br>";
                                temp = temp.substring(index);
                        }
                        else {
                            description = description + temp + "<br>";
                            temp = "";
                        }
                    }
                    description = description + temp;

                    if(ulIndex > -1) description = description + d.description.substring(ulIndex);

                    return `<div class="firstLine"> ${description} </div>`;
                }
            });

        let linkTip = d3.tip()
            .attr('class', 'linkTip')
            .offset([-10, 0])
            .html(function(d) {
                const action = d.action;
                if(action.includes("prerequisite")) return `<div> ${d.source.number} is a ${action} for ${d.target.number}. </div>`;
                else if(action === "or") return `<div>Either ${d.source.number} ${action} ${d.target.number} can be taken to fulfill major requirements. You do not have to take both.`;
                else if(action.includes("corequisite")){
                    if(action !== "corequisites") return `<div> ${d.source.number} is a ${action} for ${d.target.number}.</div>`;
                    return `<div> ${d.source.number} and ${d.target.number} are ${action}. </div>`;
                }
                return "<div> Hmm, there doesn't seem to be a proper description for this connection.<br>This is most likely a mistake and will be fixed soon.</div>";
            });

        const tick = () => {
            // add the curvy lines
            path.attr('d', (d) => {
                let deltaX = d.target.x - d.source.x,
                    deltaY = d.target.y - d.source.y,
                    dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                    normX = deltaX / dist,
                    normY = deltaY / dist,
                    sourcePadding = d.left ? radius + 15 : radius - 5,
                    targetPadding = d.right ? radius + 15 : radius - 5,
                    sourceX = d.source.x + (sourcePadding * normX),
                    sourceY = d.source.y + (sourcePadding * normY),
                    targetX = d.target.x - (targetPadding * normX),
                    targetY = d.target.y - (targetPadding * normY);
                return `M${sourceX},${sourceY}A${dist},${dist} 0 0,1 ${targetX},${targetY}`;
            });

            node.attr('transform', function(d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });
        };

        let container = svg.append('g'); //contains all paths and nodes
        this.addToContainer(container, width, height); //make sure this is always added before the path and nodes

        let force = this.buildD3Force(nodes, links, width, height, tick);
        let path = this.buildPath(container, force);

        let node = this.buildNode(container, force);
        this.addNodeAttributes(node, radius);

        this.addToolTips(container, nodeTip, linkTip);

    }

    deconstructGraph() {
        d3.select("svg").remove();
        d3.select(".nodeTip").remove();
        d3.select(".linkTip").remove();
    }

    /////////////////////
    //Attribute Methods//
    /////////////////////

    addNodeAttributes(node, radius){
        node.each(function(d) {
            //TODO: Fix sizing
            d3.select(this).append('circle')
                // .attr('class', function(d){
                //   return 'nodeShape' + ' ' + d.type;
                // })
                .attr('class', 'nodeShape')
                .attr('r', radius);
        });

        // add the text
        node.append('text')
            .attr('dy', '.35em')
            .text(function(d) {return d.number; });
    }

    addToContainer(container, width, height){
        this.buildAxes(container, width, height);
        this.buildArrow(container);
    }

    addToolTips(container, nodeTip, linkTip){
        container.selectAll('.node').call(nodeTip);
        container.selectAll('.link').call(linkTip);

        container.selectAll('.node')
            .on("mouseover", nodeTip.show)
            .on("mouseout", nodeTip.hide);

        container.selectAll('.link')
            .on("mouseover", linkTip.show)
            .on("mouseout", linkTip.hide);
    }

    /////////////////////
    // Builder Methods //
    /////////////////////

    buildArrow(container){
        container.append('svg:defs').selectAll('marker')
            .data(['end'])      // Different link/path types can be defined here
            .enter().append('svg:marker')    // This section adds in the arrows
            .attr('id', String)
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 15)
            .attr('refY', -0.5)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');
    }

    buildAxes(container, width, height) {
        this.buildX(container, width, height);
        this.buildY(container, width, height);
    }

    buildD3Force(nodes, links, width, height, tick){
        return d3.layout.force()
            .nodes(d3.values(nodes))
            .links(links)
            .size([width, height])
            .gravity(0.07)
            .linkDistance(105)
            .charge(-800)
            .on('tick', tick)
            .start();
    }

    buildNode(container, force){
        // define the nodes
        return container.selectAll('.node')
            .data(force.nodes())
            .enter()
            .append('svg:g')
            .attr('class', function(d){
              return 'node ' + d.type;
            })
            .on("click", function(d){
                if(d.type !== "lister") window.open(ForceDirectedGraph.Constants.carta + d.number);
                else{
                    if(d.site) window.open(d.site);
                }
            });
    }

    buildPath(container, force){
        //adds links and arrows
        return container.append('svg:g').selectAll('path')
            .data(force.links())
            .enter()
            //the below is if we want to add text to the link
            // .append('svg:g')
            // .attr('class', 'text')
            .append('svg:path')
            .attr('class', function(d){
              return 'link ' + d.action;
            })
            .attr('marker-end', 'url(#end)');
    }


    buildX(container, width, height){
        container.append('g')
            .attr('class', 'x axis')
            .selectAll('line')
            .data(d3.range(0, width, 10))
            .enter().append('line')
            .attr('x1', function(d) { return d; })
            .attr('y1', 0)
            .attr('x2', function(d) { return d; })
            .attr('y2', height);
    }

    buildY(container, width, height){
        container.append('g')
            .attr('class', 'y axis')
            .selectAll('line')
            .data(d3.range(0, height, 10))
            .enter().append('line')
            .attr('x1', 0)
            .attr('y1', function(d) { return d; })
            .attr('x2', width)
            .attr('y2', function(d) { return d; });
    }

}

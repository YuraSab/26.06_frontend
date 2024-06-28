import {Component} from "react";
import * as d3 from "d3";

interface ChartMetricProps {
    id: string,
    data: number[],
    width: number,
    height: number,
}

class ChartMetric extends Component<ChartMetricProps> {

    componentDidMount() {
        this.drawChart();
    }
    componentDidUpdate() {
        this.drawChart();
    }

    drawChart() {
        const data = this.props.data;
        const height = this.props.height;
        const width = this.props.width;
        const barPadding = 5; // Відступ між стовпчиками
        const topPadding = 40;


        // видалити існуючий svg, щоб створити новий
        d3.select(`#${this.props.id}`).select("svg").remove();
        // створити новий svg
        const svg = d3.select(`#${this.props.id}`)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data) as number])
            .range([0, height - topPadding]);

        // створення діаграми
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * (width / data.length))
            .attr("y", (d) => height - yScale(d) - 5)
            .attr("width", (width / data.length) - barPadding)
            .attr("height", (d) => yScale(d))
            .attr("fill", "green")

        // створення надпису над стовпцями
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * (width / data.length) + (width / data.length) / 2 )
            .attr("y", (d) => height - yScale(d) - 10)
            .attr("text-anchor", "middle")
            .attr("fill", "black");


    }

    render() {
        return <div id={this.props.id}></div>;
    }
}


export default ChartMetric;
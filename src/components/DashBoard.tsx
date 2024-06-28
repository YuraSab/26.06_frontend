import React, {useEffect, useState} from 'react';
import ChartMetric from "./ChartMetric";
import styles from "./DashBoard.module.css";
import {metricService} from "../services/Metric";
import {MetricType} from "../models/Metric";



const DashBoard = () => {

    // const metricsData: MetricType[] = [
    //     {
    //         id: 1,
    //         data: [4, 2, 4, 7, 9, 10, 8, 6],
    //         author: "Khabib",
    //         caption: "Product price",
    //         about: "My metrics",
    //         date: "20.10.2023",
    //     },
    //     {
    //         id: 2,
    //         data: [1, 2, 7, 7, 7, 6, 8, 10],
    //         author: "Buldiga",
    //         caption: "Company shares",
    //         about: "My metrics",
    //         date: "10.10.2023",
    //     },
    //     {
    //         id: 3,
    //         data: [1, 2, 4, 5, 4, 6, 8, 10],
    //         author: "Chell",
    //         caption: "Personal amount",
    //         about: "My metrics",
    //         date: "25.10.2023",
    //     }
    // ];


    const [metrics, setMetrics] = useState<MetricType[]>([]);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const data = await metricService.fetchMetrics();
                setMetrics(data);
            } catch ( error ) {
                console.error(`Falied to fetch metrics: `, error);
            }
        }
        fetchMetrics();
    }, []);

    return (
        <div className={styles.chartList}>
            {
                metrics.map((el) => <div>
                        <h3>{el.caption}</h3>
                        <ChartMetric
                            id={`chart${el.id}`}
                            data={el.data}
                            width={700}
                            height={300}
                            key={el.id}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default DashBoard;
import React, {useEffect, useState} from 'react';
import ChartMetric from "./ChartMetric";
import styles from "./DashBoard.module.css";
import {metricService} from "../services/Metric";
import {MetricType} from "../models/Metric";



const DashBoard = () => {

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
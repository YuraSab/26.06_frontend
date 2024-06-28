import axios from "axios";
import {MetricType} from "../models/Metric";

class MetricService {

    backendURL = "http://localhost:8080";

    async fetchMetrics(): Promise<MetricType[]> {
        try {
            const response = await axios.get<MetricType[]>(`${this.backendURL}/api/metrics`);
            // const response = await axios.get<MetricType[]>(`http://localhost:8080/api/metrics`);
            console.log("response", response);
            return response.data;
        } catch ( error ) {
            console.error(`Failed to fetch metrics: `, error);
            // пустий масив у випадку помилки
            return [];
        }
    }
}

export const metricService = new MetricService();
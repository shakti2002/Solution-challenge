import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const MyChart = () => {
    const [chartData, setChartData] = useState({
        series: [],
        options: {
            chart: {
                type: 'line'
            },
            xaxis: {
                categories: []
            }
        }
    });

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('resume', selectedFile);

        try {
            const response = await fetch('/upload_resume', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();

            const testNames = Object.values(data['Test Name']);
            const results = Object.values(data['Results (IU/L or mg/dL)']);

            setChartData({
                series: [{ name: 'Results (IU/L or mg/dL)', data: results }],
                options: {
                    chart: {
                        type: 'line'
                    },
                    xaxis: {
                        categories: testNames
                    }
                }
            });
        } catch (error) {
            console.error('Error fetching chart data:', error);
        }
    };

    return (
        <div className='m-[1rem] bg-[#69696929] p-[2rem] rounded'>
            <h1>My Chart</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <Chart options={chartData.options} series={chartData.series} type="line" width={500} />
        </div>
    );
};

export default MyChart;


import Chart from 'react-apexcharts';

const MyChart = () => {
    const options = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    };

    return (
        <div className='m-[1rem] bg-[#69696929] p-[2rem] rounded'>
            <h1>My Chart</h1>
            <Chart options={options} series={options.series} type="line" width={500} />
        </div>
    );
};

export default MyChart;

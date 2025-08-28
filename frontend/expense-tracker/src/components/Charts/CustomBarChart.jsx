import React from 'react';
import{
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";

const CustomBarChart = ({data, xAxisDataKey = "category"}) => {

    //Function to format long category names
    const formatCategoryName = (value) => {
        if (value.length > 15) {
            return value.substring(0, 15) + '...';
        }
        return value;
    };

    //Calculate chart height based on number of categories
    const getChartHeight = () => {
        if (data.length > 4) {
            return 400; // More height for more categories
        }
        return 350; // Default height
    };

    //Calculate chart margins based on data
    const getChartMargins = () => {
        const hasLongCategories = data.some(item => 
            item[xAxisDataKey] && item[xAxisDataKey].length > 15
        );
        
        if (hasLongCategories) {
            return { top: 20, right: 30, left: 20, bottom: 80 };
        }
        return { top: 20, right: 30, left: 20, bottom: 60 };
    };

    //Function to alternate colors
    const getBarColor = (index) => {
        return index % 2 === 0 ? "#875cf5" : "#cfbefb";
    };

    const CustomTooltip = ({active, payload}) => {
        if(active && payload && payload.length){
            return(
                <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
                    <p className="text-xs font-semibold text-purple-800 mb-1">{payload[0].payload[xAxisDataKey]}</p>
                    <p className="text-sm text-gray-600">
                        Source: <span className="text-sm font-medium text-gray-900">{payload[0].payload.source}</span><br/>
                        Amount: <span className="text-sm font-medium text-gray-900">{payload[0].payload.amount}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

  return (
    <div className="bg-white mt-6 pb-4 overflow-visible" style={{ minHeight: `${getChartHeight() + 20}px` }}>
        <ResponsiveContainer width="100%" height={getChartHeight()}>
            <BarChart data={data} margin={getChartMargins()}>
                <CartesianGrid stroke="none" />

                <XAxis 
                    dataKey={xAxisDataKey} 
                    tick={{fontSize:11, fill:"#555"}} 
                    stroke="none"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                    tickFormatter={formatCategoryName}
                    minTickGap={10}
                    allowDataOverflow={false}
                />
                <YAxis tick={{fontSize:12, fill:"#555"}} stroke="none" />

                <Tooltip content={CustomTooltip} />

                <Bar
                    dataKey = "amount"
                    fill = "#FF8042"
                    radius={[10, 10, 0, 0]}
                    activeDot = {{r: 8, fill: "yellow"}}
                    activeStyle = {{fill: "green"}}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={getBarColor(index)} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart;

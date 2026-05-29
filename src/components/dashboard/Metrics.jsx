import React from 'react'
import { HiChevronDown } from "react-icons/hi";


function Metrics() {
  const metricsData = [
  { title: "Revenue", value: "₹50,846.90", percentage: "12%", color: "#025cca", isIncrease: false },
  { title: "Outbound Clicks", value: "10,342", percentage: "16%", color: "#02ca3a", isIncrease: true },
  { title: "Total Customer", value: "19,720 +", percentage: "10%", color: "#f6b100", isIncrease: true },
  { title: "Event Count", value: "20,000 +", percentage: "10%", color: "#be3e3f", isIncrease: false },
];

   const itemsData = [
  { title: "Total Categories", value: "8", percentage: "12%", color: "#5b45b0", isIncrease: false },
  { title: "Total Dishes", value: "50", percentage: "12%", color: "#285430", isIncrease: true },
  { title: "Active Orders", value: "12", percentage: "12%", color: "#735f32", isIncrease: true },
  { title: "Total Tables", value: "10", color: "#7f167f"}
];
  return (
    <div className="container mx-auto py-2 px-6 md:px-4">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-semi-bold text-white text-xl">
                    Overall Performance
                </h2>
                <p className='text-sm text-gray-400'>Summary of key performance indicators for the current reporting period</p>
            </div>
            <button className='flex items-center gap-1 px-4 py-2 rounded-md text-white bg-neutral-800'>
                Last 1 month
                <HiChevronDown className="w-3 h-3" strokeWidth={2} />
            </button>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-4">
        {metricsData.map((metric, index) => {
          return (
            <div
              key={index}
              className="shadow-sm rounded-lg p-4"
              style={{ backgroundColor: metric.color }}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-xs text-[#f5f5f5]">
                  {metric.title}
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
                  >
                    <path
                      d={metric.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                  <p
                    className="font-medium text-xs"
                    style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
                  >
                    {metric.percentage}
                  </p>
                </div>
              </div>
              <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-between mt-12">
        <div>
          <h2 className="font-semibold text-[#f5f5f5] text-xl">
            Item Details
          </h2>
          <p className="text-sm text-[#ababab]">
           A comprehensive breakdown of individual item performance, inventory status, and related statistics
          </p>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">

            {
                itemsData.map((item, index) => {
                    return (
                        <div key={index} className="shadow-sm rounded-lg p-4" style={{ backgroundColor: item.color }}>
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-xs text-[#f5f5f5]">{item.title}</p>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4" fill="none">
                              <path d="M5 15l7-7 7 7" />
                            </svg>
                            <p className="font-medium text-xs text-[#f5f5f5]">{item.percentage}</p>
                          </div>
                        </div>
                        <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">{item.value}</p>
                      </div>
                    )
                })
            }

        </div>
    </div>
    </div>


  )
}

export default Metrics
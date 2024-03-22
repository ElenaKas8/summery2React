import React from 'react'

const StatisticsCard = ({id,title, value}) => {
  return (
    <div>
<p>{value}</p>
<p>{title}</p>
    </div>
  )
}

export default StatisticsCard
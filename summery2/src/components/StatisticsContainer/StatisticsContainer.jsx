import React from 'react'
import StatisticsCard from '../StatisticsCard/StatisticsCard'

const statisticsData = [
  {
    id: 1,
    title: 'УМК по различным направлениям по робототехнике',
    value: '10'
  },
  {
    id: 2,
    title: 'Школ, в которых запущена робототехника',
    value: '20'
  },
  {
    id: 3,
    title: 'Педагогов, прошедших курсы повышения квалификации',
    value: '100'
  },
  {
    id: 4,
    title: 'Обученных детей на базе собственных центров',
    value: '10 000'
  }
]

export default function StatisticsContainer() {
  return (
    <div style={{ display: 'flex', gap: '40px', justifyContent: 'space-between' }}>
      {
        statisticsData.map(el => <StatisticsCard key={el.id} {...el} />)
      }
    </div>
  )
}


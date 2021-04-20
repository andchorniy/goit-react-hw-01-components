import React from 'react'
import PropTypes from 'prop-types'
import StatItem from './StatItem'
import style from './Statistics.module.css'

const Statistics = ({title, stats})=>{
    return <section className={style.statistics}>
    {title  && (<h2 className={style.title}>{title}</h2>)}    
    <ul className={style.list}>
      {stats.map(({id, label, percentage}) => {
          const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
         return  <li style={{backgroundColor: randomColor}} className={style.item} key={id} >
            <StatItem 
            label={label}
            percentage={percentage}
            />
          </li>
      })}
    </ul>
  </section>
}
Statistics.propTypes={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })
    ).isRequired,
}

export default Statistics
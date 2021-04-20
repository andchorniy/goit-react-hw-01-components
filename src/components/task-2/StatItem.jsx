import React from 'react'
import PropTypes from 'prop-types'
import style from './Statistics.module.css'

const StatItem = ({label, percentage}) => 
    
        <>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
        </>


StatItem.propTypes={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatItem
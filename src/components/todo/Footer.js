import React from 'react'
import { Link } from '../router'

export const Footer = () => {
    return (
        <div className='Footer'>
            <Link to='/todo-app/'>All</Link>
            <Link to='/todo-app/active'>Active</Link>
            <Link to='/todo-app/complete'>Complete</Link>
        </div>
    )
}
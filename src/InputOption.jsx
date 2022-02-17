import React from 'react'
import './InputOption.css'
export default function InputOption({Icon, title, Color}) {
  return (
    <div className='inputOption'>
        <Icon style={{color: Color}} />
        <h4>{title}</h4>
    </div>
  )
}

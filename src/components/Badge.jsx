import React from 'react'

export default function Badge(props) {
  const styles = {
    div:{
      color: props.color,
      height: '35px',
      backgroundColor: '#ccccf8',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '5px',
      padding: '2px 5px'
    },
    img:{
      height: '80%',
      display: 'inline-block',
      marginRight: '3px'
    },
    p:{
      fontWeight: 'bold'
    }
  }
  return (
    <div style={styles.div} className='skill-badge'>
      <img src={props.src} style={styles.img} alt='badge' />
      <p style={styles.p}>{props.tittle}</p>
    </div>
  )
}

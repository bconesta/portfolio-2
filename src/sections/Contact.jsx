import React from 'react'
import ReactBadge from '../img/badges/react.png'
import JSBadge from '../img/badges/js.png'
import SassBadge from '../img/badges/sass.png'
import VercelBadge from '../img/badges/vercel.png'
import Badge from '../components/Badge'
export default function Contact(props) {

  const lang = props.lang;

  return (
    <div>
      <h1>{lang.contact[0]}</h1>
      <h4>Email</h4>
      <a href="mailto:bconesta@gmail.com">bconesta@gmail.com</a> <br/>
      <h4>Whatsapp</h4>
      <a href="https://wa.me/+543489576123" target="_blank" rel="noreferrer">+54 3489 576123</a> <br/>
      <h4>LinkedIn</h4>
      <a href="https://linkedin.com/in/bruno-conesta">in/bruno-conesta</a>

      <h2>{lang.contact[1]}</h2>
      <div className="badges-skills" style={{margin: 0}}>
          <Badge src={ReactBadge} tittle="React" />
          <Badge src={JSBadge} tittle="JavaScript" />
          <Badge src={SassBadge} tittle="SASS" />
          <Badge src={VercelBadge} tittle="Vercel" />
        </div>
    </div>
  )
}

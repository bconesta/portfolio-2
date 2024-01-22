export default function Bruno({ lang }) {

  return (
    <div>
        <h1>BRUNO CONESTA</h1>
        <h2>{lang.bruno[0]}</h2>
        <h4>{lang.bruno[1]} <a href="mailto:bconesta@gmail.com">bconesta@gmail.com</a></h4>
        <a className='download' href="/assets/files/resume.pdf" download="resume.pdf">{lang.bruno[2]}</a>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/bruno-conesta/" target="_blank" rel="noreferrer">
                    <img src='/assets/img/icons/linkedin.png' alt='Linkedin' />
                </a>
            </li>
            <li>
                <a href="https://github.com/bconesta" target="_blank" rel="noreferrer">
                    <img src='/assets/img/icons/github.svg' alt='Github' />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/brunardou6" target="_blank" rel="noreferrer">
                    <img src='/assets/img/icons/gorjeo.png' alt='Twitter' />
                </a>
            </li>
        </ul>
    </div>
  )
}

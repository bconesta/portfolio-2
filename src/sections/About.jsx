export default function About({ lang }) {
  return (
    <div>
      <h1>{lang.about[0]}</h1>
      <p>{lang.about[1]} <br /> <br />
        {lang.about[2]}
      </p>
      <h2>{lang.about[3]}</h2>
      <p>
        {lang.about[4]} <a href="https://linkedin.com/in/bruno-conesta" target="_blank" rel='noreferrer'>{lang.about[5]}</a> 
      </p>
    </div>
  )
}

import Card from '../Card'

import styles from './CardsCarousel.module.scss'

export default function CardsCarousel({ projects=[] }) {

    return (
        <div className={styles.container}>
            {projects.map(({title, images, badges, appRef, gitRef, download, summary}) => (
                <Card
                    key={title+Math.random()}
                    src={'/assets/img' + images[0]} 
                    alt={title} 
                    title={title.toUpperCase()} 
                    badges={badges}
                    appRef={appRef}
                    gitRef={gitRef}
                    download={download}
                >
                {summary}
              </Card>
            ))}
        </div>
    )
}

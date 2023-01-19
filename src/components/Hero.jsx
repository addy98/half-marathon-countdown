import { Container } from 'react-bootstrap'
import Clock from './Clock'

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-wrapper flex flex-justify-center'>
                <img 
                    className='hero-bg'
                    src='https://www.prospectpark.org/wp-content/uploads/filer_public/da/45/da456636-9d8a-4ce6-8bd6-36b6f2ca3ec6/celizabeth_keegin_colley_path_long_meadow_largest_version-scaled.jpg'
                    alt='prospect park background'>
                </img>
                <div className='hero-content'>
                    <Container>
                        <h1 className='hero-copy'>Abby runs the Prospect Park Half Marathon in:</h1>
                        <Clock></Clock>
                    </Container>
                </div>
            </div>
            
        </div>
    )
}

export default Hero
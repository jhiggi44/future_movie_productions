import projects from '../../data'
import Layout from './layout';
import TiltedSectionContainer from './tilted_section_container'

function Entry() {
    return(
        <div>
            <Layout project={ projects["mabel"] } />
            <TiltedSectionContainer>
                <Layout project={ projects["thistlewits"] } />
            </TiltedSectionContainer>
            <Layout project={ projects["lucyShimmers"] } />
        </div>
    )
}

export default Entry;
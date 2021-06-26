import { Projects } from './Projects';
import { AboutMe } from './AboutMe';
import { Resume } from './Resume';
import { Contact } from './Contact';

export function Header(props) {


    return (
    
        <header>
            <h1>Dan Ryan</h1>
            <nav>
                <ul>
                    <li><a href='#' onClick={() => props.setPage(<AboutMe />)}>About Me</a></li>
                    <li><a href='#' onClick={() => props.setPage(<Projects />)}>Projects</a></li>
                    <li><a href='#' onClick={() => props.setPage(<Contact />)}>Contact</a></li>
                    <li><a href='#' onClick={() => props.setPage(<Resume />)}>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}
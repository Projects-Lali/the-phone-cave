import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {

    return (

        <Navbar fixed='top' expand="md" id="reload">
            <Container>
                <Navbar.Brand>
                    <Link className="nav-link" to="/">The Phone Cave
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/habitaciones">Phones</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation
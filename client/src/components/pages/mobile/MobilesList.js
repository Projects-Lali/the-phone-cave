import { Row, Container, DropdownButton, Dropdown, Col, Card, Modal, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { Component } from 'react'
import MobilesService from '../../../services/mobile.service'
import Spinner from '../../shared/Spinner/Spinner'
import MobileDetails from './MobileDetails'
import './MobileList.css'
//import MobileCard from './MobileCard'
// import * from "../../../media/images"


class MobilesList extends Component {

    constructor() {
        super()
        this.state = {
            list: undefined,
            mobiles: undefined,
            modal: false
        }
        this.mobilesService = new MobilesService()
    }


    loadPhones = () => {

        this.mobilesService
            .getMobiles()
            .then(response => { this.setState({ mobiles: response.data, list: response.data }) })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadPhones()
    }

    render() {

        return (

            !this.state.mobiles
                ?
                <Spinner />
                :
                (<>

                    <Container>
                        <section className='phone-cards'>
                            <h1>Los Móviles</h1>
                            <Row xs={1} md={6} className="g-4">

                                {this.state.mobiles.map(elm =>
                                    <>
                                        <Col md={6}>
                                            <Link className='link-card' to='/' key={elm._id} >
                                                <Card className='phone-card'>
                                                    <Card.Img variant="top" src={require(`../../../media/images/${elm.imageFileName}`).default} />
                                                    <Card.Body>
                                                        <Card.Title className='title'>{elm.name}</Card.Title>
                                                        <Button onClick={() => { this.setState({ modal: true }) }} variant="dark" style={{ marginBottom: '20px' }}>Ver más</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                            <Modal.Header>
                                                <Modal.Title>Holi</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <MobileDetails mobile_id={elm._id} key={elm._id} closeModal={() => this.setState({ modal: false })} />
                                            </Modal.Body>
                                        </Modal>

                                    </>
                                )}

                            </Row>
                        </section>
                    </Container>

                </>
                )
        )
    }
}

export default MobilesList


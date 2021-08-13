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
                                        <Col md={3}>
                                            <Card className='phone-card'>
                                                <div className='img-box'>
                                                    <Card.Img variant="top" src={require(`../../../media/images/${elm.imageFileName}`).default} />
                                                </div>
                                                <Card.Body>
                                                    <h5 className='title'>{elm.name}</h5>
                                                    <div className='card-button'>
                                                        <Button className='btn-more' onClick={() => { this.setState({ modal: true }) }}>+</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
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


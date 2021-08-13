import { Component } from 'react'
import MobilesService from '../../../services/mobile.service'
import Spinner from '../../shared/Spinner/Spinner'

import { Container, Row, Col } from 'react-bootstrap'

class MobileDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile: undefined
        }
        this.mobilesService = new MobilesService()
    }

    phoneDetails = () => {


        this.mobilesService
            .getDetails(this.props.mobile_id)
            .then(response => this.setState({ mobile: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.phoneDetails()

    }


    render() {

        return (

            <Container>

                {!this.state.mobile
                    ?
                    <Spinner />
                    :
                    <>
                        <Row className="justify-content-around">
                            <Col md={12}>
                                <img src={require(`../../../media/images/${this.state.mobile.imageFileName}`).default} alt={this.state.mobile.name} style={{ width: '100%' }} />
                                <h1>{this.state.mobile.name}</h1>
                                <hr></hr>
                                <p>{this.state.mobile.description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>{this.state.mobile.screen}</p>
                                <p>{this.state.mobile.processor}</p>
                                <p>{this.state.mobile.ram}</p>
                            </Col>
                            <Col md={6}>
                                <p>{this.state.mobile.manufacturer}</p>
                                <p>{this.state.mobile.color}</p>
                                <p>{this.state.mobile.price}</p>
                            </Col>
                        </Row>
                    </>
                }

            </Container>
        )
    }
}


export default MobileDetails
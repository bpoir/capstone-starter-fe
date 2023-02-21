import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Vscone from '../../images/vscone.png'
import LemonBarsForChris from '../../images/lemonbarsforchris.png'
import Tiramisu from '../../images/tiramisu.png'

function GridCards(props) {

    return (
        <div data-testid="gridContainer" className="GridCards container mb-3">
            <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Vscone} />
                            <Card.Body>
                                <Card.Title>Vanilla Bean Scones</Card.Title>
                                <Card.Text>
                                    Real beans!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={LemonBarsForChris} />
                            <Card.Body>
                                <Card.Title>Chris's Lemon Bars</Card.Title>
                                <Card.Text>
                                    Not from concentrate?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Tiramisu} />
                            <Card.Body>
                                <Card.Title>Tiramisu</Card.Title>
                                <Card.Text>
                                    Delicious, buy some.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    

            </Row>
        </div>
    );
}

export default GridCards;

import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Filters } from '../Filters/filters';

import styles from './style.css';

export class ResultSet extends React.Component {
    componentDidMount() {
        this.props.fireRequestOnLoad()
    }
    render(props) {

        return (
            this.props.displayData ?
                <div className="application">
                    <div className="applTitle">{'SpaceX Launch Programs'}</div>
                    <div className="app-container">
                        <div className="filters">
                            <Filters
                                fireRequestOnYearSelection={this.props.fireRequestOnYearSelection}
                                fireRequestOnSuccessfulLaunchAndLanding={this.props.fireRequestOnSuccessfulLaunchAndLanding}
                            />
                        </div>
                        <div className="results">
                            <Container >
                                <Row>
                                    {this.props.displayData.data && this.props.displayData.data.map((card, index) => {
                                        return (
                                            <Col key={index} sm={12} lg={3} md={6}>
                                                <DisplayCard cardInfo={card} index={index} />
                                            </Col>
                                        )
                                    })
                                    }
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="author"><span className="title">{'Developed by '}</span>{'Madhuri G'}</div>
                </div> : ''
        )
    }
}

export const DisplayCard = ({ cardInfo, index }) => {
    return (
        <div key={index} className="card-container">
            <div className="cardDetails">
                <div className="imageContainer">
                    <img src={cardInfo.links.mission_patch} />
                </div>
                <div className="contentblock">
                    <div>
                        <div>
                            <span className="header"> {cardInfo.mission_name} {'#'}{cardInfo.flight_number}</span>
                        </div>
                        {cardInfo.mission_id.length > 0 ?
                            <div>
                                <span className="title">{'Mission Ids :'}</span>
                                {cardInfo.mission_id.map(id => (
                                    <ul key={id}>
                                        <li>
                                            {id}
                                        </li>
                                    </ul>
                                ))}
                            </div> : ''}
                        <div>
                            <span className="title">  {'Launch Year :'}</span><span className="desc">{cardInfo.launch_year}</span>
                        </div>
                        <div>
                            <span className="title">{'Successful Launch :'}</span><span className="desc">{cardInfo.launch_success.toString()}</span>
                        </div>
                        <div>
                            <span className="title">  {'Successful Landing :'}</span><span className="desc">{cardInfo.launch_success.toString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
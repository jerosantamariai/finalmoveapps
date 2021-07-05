import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'antd';

const Home = props => {
    const { store } = useContext(Context);
    return (
        <section>
            <Row className="rows" gutter={[16, 16]}>
                {
                    !!store.users ?
                        store.users.map((user, i) => {
                            return (
                                <Col xs={24} sm={18} md={12} lg={6}>
                                    <Card className="cards" title={user.name} style={{ width: 300 }} key={i}>
                                        <Link to={"/" + user.name}>More</Link>
                                    </Card>
                                </Col>
                            )
                        })
                        : (
                            null
                        )
                }
            </Row>
        </section >

    );

}

export default Home;
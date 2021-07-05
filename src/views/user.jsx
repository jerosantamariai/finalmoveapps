import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Descriptions, Button } from 'antd';

const User = props => {
    const { store } = useContext(Context);
    const infoUser = props.match.params.name;
    return (

        <div className="user-cont">
            {
                !!store.users ?
                    store.users.map((name, i) => {
                        if (JSON.stringify(name.name) === JSON.stringify(infoUser)) {
                            return (
                                <div key={i}>
                                    <Descriptions title="User Info" classname="ultraCard" bordered>
                                        <Descriptions.Item label="Name:">{name.name}</Descriptions.Item>
                                        <Descriptions.Item label="Username:">{name.username}</Descriptions.Item>
                                        <Descriptions.Item label="Email:">{name.email}</Descriptions.Item>
                                        <Descriptions.Item label="Phone:">{name.phone}</Descriptions.Item>
                                        <Descriptions.Item label="Website:" span={2}>
                                            <a href={name.website} target="_blank" rel="noreferrer">{name.website}</a>
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Company:" span={3}>
                                            <strong>Name Company:</strong> {name.company.name}
                                            <br />
                                            <strong>Catch Phrase:</strong> {name.company.catchPhrase}
                                            <br />
                                            <strong>BS:</strong> {name.company.bs}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Company:" span={3}>
                                            <strong>Street:</strong> {name.address.street}
                                            <br />
                                            <strong>Suite:</strong> {name.address.suite}
                                            <br />
                                            <strong>City:</strong> {name.address.city}
                                            <br />
                                            <strong>Zipcode:</strong> {name.address.zipcode}
                                            <br />
                                            <strong>Location:</strong> ({name.address.geo.lat}, {name.address.geo.lng})
                                            <br />
                                        </Descriptions.Item>                                       
                                    </Descriptions>
                                </div>
                            )
                        }
                        return null
                    })
                    : (
                        null
                    )
                }
                <div className="buttons">
                    <Button type="danger" shape="round" href="/" size="large" block>Back</Button>
                </div>
        </div >
    );
}

export default User;

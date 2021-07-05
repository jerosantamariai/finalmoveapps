import React, { useContext } from 'react';
import { Context } from '../store/appContext';

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
                                    <div>
                                        <h5>{name.name}</h5>
                                        <p>Username: {name.username}</p>
                                        <p>Email: {name.email}</p>
                                        <p>Phone: {name.phone}</p>
                                        <p>Website: {name.website}</p>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    })
                    : (
                        null
                    )
            }
        </div>
    );
}

export default User;

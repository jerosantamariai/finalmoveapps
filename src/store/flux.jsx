const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: null,
        },

        actions: {
            getUsers: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            users: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }

    }
}



export default getState;
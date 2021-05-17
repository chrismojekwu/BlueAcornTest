const addToCart = (itemId) => {

    const body = {
        items: [
            {
                quantity: 1,
                id: itemId
            }
        ]
    };

    return fetch("/cart/add.js", {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then(res => {
        console.log(res);
    })

};
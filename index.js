const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello i am nodemon my smarty smarty smarty site')
});


const users = [
    { id: 1, name: 'Sabana', email: 'Sabana@gmail.com', phone: '01825692700' },
    { id: 2, name: 'Saba', email: 'Saba@gmail.com', phone: '01825692700' },
    { id: 3, name: 'Safa', email: 'Safa@gmail.com', phone: '01825692700' },
    { id: 4, name: 'jomm', email: 'jomm@gmail.com', phone: '01825692700' },
    { id: 5, name: 'hira', email: 'hira@gmail.com', phone: '01825692700' },
    { id: 6, name: 'sadia', email: 'sadia@gmail.com', phone: '01825692700' },
]


app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'jack-fruit', 'ata'])
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
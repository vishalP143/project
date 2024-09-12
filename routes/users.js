import express from 'express';
import { v4 as  uuidv4 } from 'uuid';

const router = express.Router();

// Mock database
// const users = [
//   {
//     first_name: 'Vishal',
//     last_name: 'Pradhan',
//     email: 'johndoe@example.com',
//   },
//   {
//     first_name: 'VL',
//     last_name: 'Pradhan',
//     email: 'alicesmith@example.com',
//   },
// ];

// {
//     "first_name": "Vishal",
//     "last_name": "Pradhan",
//     "email": "johndoe@example.com"
//   }

let users = []
// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to the Database`);
})

//
router.get('/:id', (req, res) => {
    const {id} =  req.params;
    const founduser = users.find((user) => user.id === id)
    res.send(founduser);
    });

    // delete /:id - delete a specific user by their id
    router.delete('/:id', (req, res) => {
        const { id } = req.params;

        users = users.filter((user) => user.id !== id)
        res.send(`User with id ${id} has been deleted from the database`
            );
            });

             // update /:id - update a specific user by their id
             router.put('/:id', (req, res) => {
                const { id } = req.params;

                const { first_name, last_name, email } = req.body;

                const user = users.find((user) => user.id === id)

                if(first_name) user.first_name =  first_name;
                if(last_name) user.last_name = last_name;
                if(email) user.email = email;

                res.send(`User with id ${id} has been updated in the database`)
                });

export default router
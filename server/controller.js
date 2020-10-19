const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        // destructure off the body
        const {username, password, profile_pic} = req.body;
        db = req.app.get('db');
        // check to see if the user already exists - no copycats here!
        const foundUser = await db.check_user({username});
        if(foundUser[0]){
            return res.status(400).send('This user already exists');
        }
        // otherwise we proceed to salt and hash that password, delicious
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        // save it a variable of new user and....
        const newUser = await db.register_user({username, hash, profile_pic});
        // place it smack on a session and send it client-side!!
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },

    login: async(req, res) => {
        // so boom we destructure again but this time only what we need to login
        const {username, password} = req.body;
        db = req.app.get('db');
        // she doesn't even go here! - or maybe she does lol
        const foundUser = await db.check_user({username});
        if(!foundUser[0]){
            return res.status(400).send('This user does not exist');
        }
        // make sure those passwords match!!! well bcrypt makes sure but whatever

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            return res.status(401).send('That password is incorrect, dear');
        }
        
        delete foundUser[0].password;

        req.session.user = {username: foundUser[0].username, password: foundUser[0].password};
        res.status(202).send(req.session.user);

    },

    logout: (req, res) => {
        //destroy the session 
        req.session.destroy();
        res.sendStatus(200);
    }

}
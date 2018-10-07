module.exports = app => {
    app.post('/api/handleform', (req,res) => {
        
        new User({ "userName": "21222222222" })
        .save()
        .then(user => done(null, user));
        
        // req.body
        // const dataToSend = {
        //     ...req.body,
        //     "created": newDate.toString()
        // }


        //firebase.database().ref(`fullInfo/${req.body.name}`).set(dataToSend);
    });
}
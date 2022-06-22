exports.amountOfFriends = function (req, res) {
    var user =  req.session.user,
    userId = req.session.session_id;
    if(userId == null){
       res.redirect("/login");
       return;
    }
   let sql = `SELECT COUNT(*) myCount FROM friends WHERE status = ? AND friends_one =? OR friends_two =? `;
   let post = [2, userId, userId];
    connection.query(sql, post, (err, result) => {
        if(err){
            console.log(err)
        }
        res.json(result);
        console.log(result[0].myCount);

    });

};
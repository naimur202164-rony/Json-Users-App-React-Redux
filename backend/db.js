const Pool=require("pg").Pool;



const pool=new Pool({
        user:"postgres",
        password:"rony",
        host:"localhost",
        port:5432,
        database:"redux"
});



module.exports=pool
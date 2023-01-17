const express = require('express');
let mysql = require('mysql');
const bodyParser = require ('body-Parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use('/public/', express.static('./public'));           

const port = 10101;

app.get('/', (req, res) => {
    // res.send('Conexión establecida correctamente')
    res.render('index')
})

const pool = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password        : '1234',
    database        : 'modulos',
    debugger        : false
})

// app.get('/test', (req, res) => {
//     pool.query('select * from usuario', function (error, results, fields){
//         if (error) throw error
//         let correo              = results[0].correo;
//         let nombres             = results[0].nombres;
//         let apellidos           = results[0].apellidos;
//         let contrasenia         = results[0].contrasenia;
//         let edad                = results[0].edad;
//         let telefono            = results[0].telefono;

//         res.send(`Datos del usuario: ${correo}, ${nombres}, ${apellidos}, ${contrasenia}, ${edad}, ${telefono}`)
//     })
// })

app.listen(port, () =>{
    console.log(`Conexión establecida en el puerto: ${port}`);
})
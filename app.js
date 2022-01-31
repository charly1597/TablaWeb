const express = require('express');
const { query } = require('express');
const app = express();

app.use(express.static('public'));

app.get('/tabla', function (req, res) {
    let num = req.query.num;
    let tabla = '<table>';
    for(i=1;i<=10;i++){
        tabla+=`<tr><td>${i} por ${num} = ${i*num}</td></tr>`;
    }
    tabla+='</table>';
    res.send(tabla);
});
const puerto=3000;
app.listen(puerto, () => console.log("Escuchando por el puerto ", puerto))
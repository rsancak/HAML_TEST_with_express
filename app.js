var haml = require('hamljs');
var fs = require('fs');
const express = require('express');
const app = express();

app.engine('.haml', require('hamljs').renderFile);
app.set('view engine', 'hamljs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    var hamlView = fs.readFileSync('views/index.haml', 'utf8');
    res.end(haml.render(hamlView, { locals: { key: 'value' }}));
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server Ready!');
});

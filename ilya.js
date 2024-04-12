//*********************************************//
//  _ __    ___  ____ _   _  _ __ ___    __ _  //
// |  _ \  / _ \|_  /| | | ||  _   _ \  / _  | //
// | | | ||  __/ / / | |_| || | | | | || (_| | //
// |_| |_| \___|/___| \____||_| |_| |_| \____| //
//                                             //
//*********************************************//

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const temp = path.join(__dirname, './index.html');
app.set('trust proxy', 1);
app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/:page', (req,res) => {
    switch (req.params.page) {
        case 'main':
            res.sendFile(temp);
            break;
        case 'about':
            res.sendFile(temp);
            break;
        case 'products':
            res.sendFile(temp);
            break;
        case 'contacts':
            res.sendFile(temp);
            break;
        default:
            res.redirect('/main');
            break;
    }
})
app.listen(5210, () => {
    console.info('Server started');
});
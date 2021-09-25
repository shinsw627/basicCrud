const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const connect = require('./schemas');
connect();

const postsRouter = require('./routers/posts')
app.use('/api', postsRouter)

app.use(express.static('public'));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.use((req, res, next) => {  미들웨어     console.log(req);     next();   });

app.get('/hi', (req, res) => {
    res.send('Hi. This is express router')
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/write',(req, res) => {
    res.render('write')
  })

app.get('/detail', (req, res) => {
let postId = req.query.name;
res.render('detail', {postId});
})
app.get('/rewrite', (req, res) => {
let postId = req.query.name;
res.render('rewrite', {postId});
})
// const mongoose = require('mongoose');
// app.get('/mongodb', async (req, res) => {
//     await mongoose.connect('mongodb://localhost/voyage', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//         
//     });

//     const {Schema} = mongoose;
//     const postsSchema = new Schema({
//         postId: {
//             type: Number,
//             required: true,
//             unique: true
//         },
//         userName: {
//             type: String,
//             required: true
//         },
//         content: {
//             type: String
//         },
//         contentPw: {
//             type: Number,
//             required: true
//         },
//         date: {
//             type: String
//         }
//     });
    
//     let Posts = mongoose.model("Posts", postsSchema)

//     await Posts.create({
//         postId: Date.now(),
//         userName: "Nyannyan",
//         content: "sdfiasdklfalsdfjivfn;kasd;kadjfj",
//         contentPw: 1234,
//         date: Date()
//     })


//     res.send('ok');
// })

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
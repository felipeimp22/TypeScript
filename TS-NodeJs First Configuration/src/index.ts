import express from 'express';
import Req from './routes'
const app = express()

app.get('/')
console.log('Api started', Req)


app.listen(3333)
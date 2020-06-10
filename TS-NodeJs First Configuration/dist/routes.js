"use strict";
// exemplo 3
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./services/user"));
function Req(req, res) {
    var User = user_1.default({
        email: 'teste@teste',
        password: '123456',
        name: name,
        techs: [
            'node',
            'react',
            { title: 'js', id: 1234 }
        ]
    });
    res.json('Hello World');
}
exports.default = Req;
// // exemplo 2
// // nesse segundo exemplo é preciso desestruturar o user() 
// import { Request, Response } from 'express'
// import user from './services/user'
// export default function Req(req: Request, res: Response) {
//   const User = user({
//     email: 'teste@teste',
//     password: '123456',
//     name
//   })
//   res.json('Hello World')
// }
// Exemplo 1
// import { Request, Response } from 'express'
// import user from './services/user'
// export default function Req(req: Request, res: Response) {
//   const User = user("felipe", "teste@teste.com", "123456")
//   res.json('Hello World')
// }

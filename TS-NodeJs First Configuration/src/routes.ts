
// exemplo 3

import { Request, Response } from 'express'
import user from './services/user'


export default function Req(req: Request, res: Response) {
  const User = user({
    email: 'teste@teste',
    password: '123456',
    name,
    techs: [
      'node',
      'react',
      { title: 'js', id: 1234 }
    ]
  })
  res.json('Hello World')
}





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
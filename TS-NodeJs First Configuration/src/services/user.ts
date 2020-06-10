
// exemplo 3

interface techsDto {
  title: string,
  id: number

}


interface userDta {
  name?: string;
  email: string;   // é possivel passar diversas tipagens para todos os campos exemplo, email: string | number;
  password: string;
  techs: Array<string | techsDto>; // <---- quando a declaração do array pode ser variavel, e ter varios tipos dentro dela.
  //techs: string[]; <---- Apenas para array simples, aonde tem apenas um tipo de informação como exemplo string

}



export default function User({ name = "", email, password, techs }: userDta) {

  const user = {
    name,
    email,
    password,
    techs
  }

  return user

}











//---------------------------------------------------------------------------------------------------------------------

//exemplo 2

// interface userDta {
//   name?: string,              //<--------- ?: diz que o nome é opcional
//   email: string,
//   password: string
// }


// //Desestruturando o usuario, é a mesma coisa do que (data:userDta) porem desestruturando as informações direto da interface
// export default function User({ name = "", email, password }: userDta) {  //name="" define que tem um valor padrão ou "default" e o ts ja identifica como string.

//   const user = {
//     name,
//     email,
//     password
//   }

//   return user

// }


//------------------------------------------------------------------------------------------------------------------------


//exemplo 1
// export default function User(name = "", email: string, password: string) {  //name="" define que tem um valor padrão ou "default" e o ts ja identifica como string.

//   const user = {
//     name,
//     email,
//     password
//   }

//   return user

// }
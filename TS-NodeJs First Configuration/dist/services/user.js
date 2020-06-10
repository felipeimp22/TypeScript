"use strict";
// exemplo 3
Object.defineProperty(exports, "__esModule", { value: true });
function User(_a) {
    var _b = _a.name, name = _b === void 0 ? "" : _b, email = _a.email, password = _a.password, techs = _a.techs;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs
    };
    return user;
}
exports.default = User;
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

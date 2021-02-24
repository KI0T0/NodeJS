import express, { request, response } from 'express';

const app = express();

/**
 * GET=> Buscar
 * POST=> Salvar
 * PUT=> Alterar
 * DELETE=>Deletar
 * PATCH=>Alteração específica
 * 
 */


 //http://localhost:3333/users

app.get("/", (request, response) =>{
    //return response.send("Hello World - NLW04");
    return response.json({message: "Hello World - NLW04"});
});

//1º param => Rota(Recurso API)
//2º param => request,response
//Utilizar o aplicativo "Insomnia" para simular as requisições dos clientes
app.post("",(request,response)=>{
    return response.json({message: "Os dados foram salvos com sucesso!"});
});

app.listen(3333,() => console.log("Server is running!"));

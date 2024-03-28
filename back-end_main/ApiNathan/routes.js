import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './config.js'

const connectionPool = new sql.ConnectionPool(sqlConfig)
await connectionPool.connect();
export const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        const { data } = await connectionPool.query`select * from Tarefas`
        return res.status(201).json(data)
    }
    catch(error){
        return res.status(501).json('Erro')
    }
})

router.get('/chamado/:id', async (req,res)=>{
    try{
            const { id } = req.params
            const { data } = await connectionPool.query`select * from Tarefas where IdChamado = ${id}`
            return res.status(201).json(data)
    }
    catch(error){
        return res.status(501).json('Erro')
    }
})

router.post('/chamado/novo', async (req, res)=>{
    try{
        const { id, chamadoData, clienteNome, descricao } = req.body
        await connectionPool.query`insert into Tarefas values(${id}, ${chamadoData}, ${clienteNome}, ${descricao})`
        return res.status(201).json('Cadastrado')
    }
    catch(error){
        return res.status(501).json('Erro ao cadastrar')
    }
})

export default router
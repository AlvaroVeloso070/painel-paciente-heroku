import React, { useState } from 'react'
import './ListPacientes.css'
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import { CreatePaciente } from './CreatePaciente'
import { EditPaciente } from './EditPaciente'

export const ListPacientes = ({data}) => {

    const [openEdit, setOpenEdit] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);

    function putData (data) {
        setOpenEdit(true);
        setOpenCreate(false); 
        sessionStorage.setItem('user', JSON.stringify(data))
    }

    function deleteData (data){
        let text = "Deseja realmente deletar o usuário "+data.nome+" ?"; 
        if(window.confirm(text) === true){
            const url = "https://ufg-painel-paciente-api.herokuapp.com/pacientes/"+data.id;
            const requestOptions = {
                method: 'DELETE'};

            fetch(url, requestOptions)
                .then(alert("O usuário foi removido com sucesso!"))
                .catch(erro => console.log(erro))

        }
    }
  return (
    <>
        {openCreate && <CreatePaciente closeEdit={setOpenCreate}/>}
        {openEdit && <EditPaciente closeEdit={setOpenEdit}/>}
        <div className='div-btn-inserir'>
            <button id='btn-inserir' onClick={()=>{setOpenEdit(false); setOpenCreate(true); document.getElementById('btn-inserir').style.display="none"}} className='inserir-medico'>Inserir um paciente</button>
        </div>
        <table className='content-table'>
            <thead>
            <tr>
                    <th id='paciente-id'>#</th>
                    <th id='paciente-nome'>Nome</th>
                    <th id='paciente-cpf'>CPF</th>
                    <th id='paciente-dataNascimento'>Data de Nascimento</th>
                    <th id='paciente-telefone'>Telefone</th>
                    <th id='paciente-email'>Email</th>
                    <th id='paciente-sintomas'>Sintomas</th>
                    <th id='paciente-dataEntrada'>Data entrada</th>
                    <th id='paciente-acoes'>Ações</th>
            </tr>
            </thead>
            <tbody>
            {data.map((data)=> (
                <tr key={data.id}>
                    <td  id='paciente-id'>{data.id}</td>
                    <td  id='paciente-nome'>{data.nome}</td>
                    <td  id='paciente-cpf'>{data.cpf}</td>
                    <td  id='paciente-dataNascimento'>{data.dataNascimento}</td>
                    <td  id='paciente-telefone'>{data.telefone}</td>
                    <td  id='paciente-email'>{data.email}</td>
                    <td  id='paciente-sintomas'>{data.sintomas}</td>
                    <td  id='paciente-dataEntrada'>{data.dataEntrada}</td>
                    <td  id='paciente-acoes'><FiEdit onClick={()=>{putData(data)}} className='edit-btn'/> <AiOutlineDelete onClick={() => {deleteData(data)}} className='delete-btn'/></td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
  )
}

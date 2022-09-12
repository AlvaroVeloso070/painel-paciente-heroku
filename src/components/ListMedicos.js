import React from 'react'
import './ListMedicos.css'
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import { useState } from 'react'
import { EditMedico } from './EditMedico'
import { CreateMedico } from './CreateMedico'



export const ListMedicos = ({data}) => {
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
            const url = "https://ufg-painel-paciente-api.herokuapp.com/medicos/"+data.id;
            const requestOptions = {
                method: 'DELETE'};

            fetch(url, requestOptions)
                .then(alert("O usuário foi removido com sucesso!"))
                .catch(erro => console.log(erro))

        }
    }
     

  return (
    <>
        {openCreate && <CreateMedico closeEdit={setOpenCreate}/>}
        {openEdit && <EditMedico closeEdit={setOpenEdit}/>}

        <div className='div-btn-inserir'>
            <button id='btn-inserir' onClick={()=>{setOpenEdit(false); setOpenCreate(true); document.getElementById('btn-inserir').style.display="none"}} className='inserir-medico'>Inserir um médico</button>
        </div>
        <table className='content-table'>
            <thead>
            <tr>
                    <th id='id'>#</th>
                    <th id='nome'>Nome</th>
                    <th id='especialidade'>Especialidade</th>
                    <th id='email'>Email</th>
                    <th id='acoes'>Ações</th>
            </tr>
            </thead>
            <tbody>
            {data.map((data)=> (
                <tr key={data.id}>
                    <td  id='id'>{data.id}</td>
                    <td  id='nome'>{data.nome}</td>
                    <td  id='especialidade'>{data.especialidade}</td>
                    <td  id='email'>{data.email}</td>
                    <td  id='acoes'><FiEdit onClick={()=>{putData(data)}} className='edit-btn'/> <AiOutlineDelete onClick={() => {deleteData(data)}} className='delete-btn'/></td>
                </tr>
            ))}
            </tbody>
        </table>
    </>


  )
}


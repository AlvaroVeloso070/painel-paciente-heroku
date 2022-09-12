import React, { useEffect, useState } from 'react'
import { ListPacientes } from '../../components/ListPacientes'
import { NavBar } from '../../components/NavBar'

export const PacientesPage = () => {

  const url = "https://ufg-painel-paciente-api.herokuapp.com/pacientes"
    const [rows, setRows] = useState([]);
    

    useEffect(() =>{
        (async () =>{
            const res = await fetch(url);
            const data = await res.json();
            setRows(data);
          })();
        },[]);

  return (
    <div>
        <NavBar/>
        <div className='content-list'>
            <div className='table'>
                <ListPacientes data={rows}/>
            </div>
        </div>
    </div>
  )
}

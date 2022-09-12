import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ListMedicos } from '../../components/ListMedicos'
import { NavBar } from '../../components/NavBar'
import './MedicosPage.css'

export const MedicosPage = () => {

    const url = "https://ufg-painel-paciente-api.herokuapp.com/medicos"
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
                <ListMedicos data={rows}/>
            </div>
        </div>

    </div>
  )
}

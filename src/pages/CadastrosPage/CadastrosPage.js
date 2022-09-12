import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ListCadastros } from '../../components/ListCadastros';
import { NavBar } from '../../components/NavBar'

export const CadastrosPage = () => {

  const url = "https://ufg-cadastros-api.herokuapp.com/cadastros"
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
                <ListCadastros data={rows}/>
            </div>
        </div>
    </div>
  )
}

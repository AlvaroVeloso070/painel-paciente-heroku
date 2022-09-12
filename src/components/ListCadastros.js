import React from 'react'

export const ListCadastros = ({data}) => {
  return (
    <div>
        
        <table className='content-table'>
            <thead>
            <tr>
                    <th id='id'>#</th>
                    <th id='nome'>Nome</th>
                    <th id='email'>Email</th>
                    <th id='telefone'>Telefone</th>
                    <th id='data_nascimento'>Data de Nascimento</th>
                    <th id='tipo_pessoa'>Tipo</th>
            </tr>
            </thead>
            <tbody>
            {data.map((data)=> (
                <tr key={data.id}>
                    <td  id='id'>{data.id}</td>
                    <td  id='nome'>{data.nome}</td>
                    <td  id='email'>{data.email}</td>
                    <td  id='telefone'>{data.telefone}</td>
                    <td  id='data_nascimento'>{data.data_nascimento}</td>
                    <td  id='tipo_pessoa'>{data.tipo_pessoa}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

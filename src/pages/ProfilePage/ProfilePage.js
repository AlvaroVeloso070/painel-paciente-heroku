import React from 'react'
import { useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { ProfileEdit } from '../../components/ProfileEdit'
import { ProfileInfo } from '../../components/ProfileInfo'

export const ProfilePage = () => {

  const [openProfileEdit, setOpenProfileEdit] = useState (false)
  return (
    <div>
        <NavBar/>
        {!openProfileEdit && <ProfileInfo profileEdit={setOpenProfileEdit}/>}
        {openProfileEdit && <ProfileEdit profileEdit={setOpenProfileEdit}/>}
    </div>
  )
}

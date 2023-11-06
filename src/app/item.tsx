"use client"
import { Cv } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  cv: Cv
}

const Item = ({cv}: Props) => {
  const router = useRouter()
  const handleDelete = async(id:number) => {
    await fetch("/api/cv?id="+id, {
      method: 'DELETE',
    })
    router.refresh()
  }
  return (
      <div className="border rounded-md p-4 flex flex-col">
          <h2 className="text-sm">ID: {cv.id}</h2>
          <h1>Techno: {cv.techno}</h1>
          <p>{cv.moamoe}</p>
          <p>{cv.profil}</p>
          <p>{cv.prenom}</p>
          <p>{cv.nom}</p>
          <p>{cv.email}</p>
          <div className="inline-flex mt-4 gap-4">
          <button onClick={() => router.push(`/update/${cv.id}`)} className="text-xs hover:text-zinc-800 font-bold">Update</button>
          <button onClick={() => handleDelete(cv.id)} className="text-xs text-red-500 hover:text-red-400 font-bold">Delete</button>
          </div>
        </div>
  )
}

export default Item
import React from 'react'
interface TypeData {
  services:any[],
  main_section:any[],
  about_section:any [],
  sub_about_sction:any [],
  consulting:any [],
  team_members:TypeTeam[],
}
interface TypeTeam{
  id:number,
      Fullname: string,
      image: string,
      Job_title: string,
      status: number,
      order: number,
      S_type: string,
      main_title: string,
      tags: string[]
}
const UesAllData = () => {
  
}

export default UesAllData
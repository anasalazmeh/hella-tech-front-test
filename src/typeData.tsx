export interface DataConsultants{
  id: number;
  image:string;
  translations:{
    name:{
      [key:string]:"en"|"ar"|""
    }
    description:{
      [key:string]:"en"|"ar"|""
    }
    specialization:{
      [key:string]:"en"|"ar"|""
    }
  }
}
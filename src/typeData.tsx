export interface DataConsultants{
  id: number;
  image:string;
  translations:{
    name:{
      [key:string]:"en"|"ar"|"tr"
    },
    description:{
      [key:string]:"en"|"ar"|"tr"
    },
    specialization:{
      [key:string]:"en"|"ar"|"tr"
    },
    slug:{
      [key:string]:"en"|"ar"|"tr"
    }
  },
}
export interface DataPolicese{
  id: number;
  key:string;
  name:{
    [key:string]:"en"|"ar"|"tr"
  },
  description:{
    [key:string]:"en"|"ar"|"tr"
  },
}
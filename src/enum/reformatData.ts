export class ReformatData{
   
  
  static onReformatExtra(extra?:string) {
    if(extra !==undefined){
      return extra.split(',')
    }
   }
}
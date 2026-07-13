import dayjs from "dayjs";
export const checkStatusFromDate = (date) => {
   const currentDate = dayjs(new Date());
   if(currentDate.isBefore(date,'day')) {
      return 'À venir'
   }else if(currentDate.isSame(date,'day')){
    return  'En cours';
   }else {
    return 'Terminé'
   }
}


 export const getStatusStyles = (status) => {
    switch (status) {
      case 'En cours': return 'text-purple-600 bg-purple-50';
      case 'À venir': return 'text-blue-600 bg-blue-50';
      case 'Terminé': return 'text-emerald-600 bg-emerald-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
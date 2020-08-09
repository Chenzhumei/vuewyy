import service from './apiService'

export function getBanners(){
   return service.get('banner');
}
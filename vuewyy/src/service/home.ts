import service from './apiService'

// 轮播图片
export function getBanners(){
   return service.get('banner');
}

// 热门歌单分类
export function getHotTags() {
    return service.get('playlist/hot').then();
}

// 推荐歌单
export function getPerosonalSheetList() {
    return service.get('personalized', {
        params: {
          limit: 8
        }
      });
}
import service from './apiService'

// 轮播图片
export function getBanners(){
   return service.get('banner');
}

// 热门歌单分类
export function getHotTags() {
    return service.get('playlist/hot');
}

// 推荐歌单
export function getPerosonalSheetList() {
    return service.get('personalized', {
        params: {
          limit: 8
        }
      });
}
 
// 入驻歌手
interface SingerParams {
    offset: number;
    limit: number;
    cat?: string;
}

const defaultSingerParams: SingerParams = {
    offset: 0,
    limit: 5,
    cat: '5001'
};

export function getEnterSinger(args: SingerParams = defaultSingerParams) {
    return service.get('artist/list', {
        params: {...args}
    });
}
import service from './apiService'

// 获取歌单详情
export function getSongSheetDetail(id: number) {
    const params = {id};
    return service.get('playlist/detail', { params })
}
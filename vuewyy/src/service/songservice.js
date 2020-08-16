import service from './apiService'


export const songSer =  {
    _getSongUrl(ids) {
        const params = {id: ids};
        return service.get('song/url', {params});
    },
    _generateSongList(songs, urls) {
       const result = [];
       songs.forEach(song => {
         const url = urls.find(url => url.id === song.id).url;
         if (url) {
           result.push({...song, url});
         }  
       });
       return result;
    },
    getSonList(songs) {
     const songArr = Array.isArray(songs) ? songs : [songs];
     const ids = songArr.map(item => item.id).join(',');
     return new Promise((resolve, reject)=> {
      this._getSongUrl(ids).then(
        res => {
          const songlist = this._generateSongList(songArr, res.data.data);
          resolve(songlist);
        }
      );
     })
    }
}


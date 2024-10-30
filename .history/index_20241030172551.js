
const songObj = [
    {
        id: 1,
        name: 'Bekarar Karke Hume',
        singer: 'Gaurav Degonkar',
        src: 'https://hindi3.djpunjab.app/load/gh1_aQhuRaj7KJr29uuj5w==/Bekarar%20Karke.mp3',
        img: 'https://e-cdn-images.dzcdn.net/images/cover/0069a4320f08e588a9d432141d68e6d7/500x500-000000-80-0-0.jpg',
        type: 'Romantic',
    },
    {
        id: 2,
        name: 'Mere Sapno Ki Rani',
        singer: 'Sanam Puri',
        src: 'https://hindi3.djpunjab.app/load/kuGu4dumDQCgyeKcJvek_A==/Mere%20Sapnon%20Ki%20Rani%20Kab%20Aayege%20Tu%20-%20Sanam.mp3',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDt5aW4al6WcE0VcKTww71_tgBxzsZ16aXS2DI0EAAE3LTz6PYDeRHmZqnT1gi3U56KNvdZtbCMA8efMCX544M2Z_REwGAWH4lpI5w-ZIwxzezQuDWNNI6wcUYtsubgaERgVpkExw88VOWoz7OoQ_Q1r3tsdYjjfaizFNlnRio19pO_6HF6ckBMRwt8Q/s1280/httpswww.lyrics2020.in.jpg',
        type: 'Romantic',
    },
    {
        id: 3,
        name: 'Kar Har Maidan Fateh',
        singer: 'Shreya Ghoshal and Sukhwinder Singh',
        src: 'https://hindi3.djpunjab.app/load/jsmHtX5X7RQkvPK2siLIdg==/Kar%20Har%20Maidaan%20Fateh.mp3',
        img: 'https://songlyrics896935518.wordpress.com/wp-content/uploads/2019/01/1548612057.jpg',
        type: 'Motivational Song',
    },
    {
        id: 4,
        name: 'Zinda',
        singer: 'Siddharth Mahadevan',
        src: 'https://hindi3.djpunjab.app/load/5j5R3V2lIzrwVPdHN0OsQA==/Zinda%20(From%20Bhaag%20Milkha%20Bhaag).mp3',
        img: 'https://tanqeed.com/wp-content/uploads/2018/10/zinda-song-bhaag-milkha-bhaag.jpg',
        type: 'Motivational Song',
    },
    {
        id: 5,
        name: 'Brothers Anthem',
        singer: 'Ajay-Atul, Vishal Dadlani',
        src: 'https://hindi3.djpunjab.app/load/9sJSllNZEclFta8GSjjtBA==/Brothers%20Anthem.mp3',
        img: 'https://e1.pxfuel.com/desktop-wallpaper/863/509/desktop-wallpaper-making-of-brothers-anthem-brothers-brothers-movie-akshay-kumar.jpg',
        type: 'Motivational Song',
    },
    {
        id: 6,
        name: 'Sarphira',
        singer: 'Pritam',
        src: 'https://hindi3.djpunjab.app/load/DbdtUsTqjhhShGj9zEaSSA==/Sarphira.mp3',
        img: 'https://www.bollywoodhungama.com/wp-content/uploads/2024/06/Chandu-Champion-7-6.jpg',
        type: 'Motivational Song',
    },
    {
        id: 7,
        name: 'Bye Bye Bye',
        singer: 'Nsync',
        src: 'https://archive.org/download/nsync-bye-bye-bye-audio/%40NSYNC%20-%20Bye%20Bye%20Bye%20%28Audio%29.mp3',
        img: 'https://pagal-world.com.in/siteuploads/thumb/sft4/1620_4.jpg',
        type: 'POP',
    },
    // https://archive.org/download/imagine-dragons-believer-feat.-lil-wayne/Imagine%20Dragons%20-%20Believer%20%28feat.%20Lil%20Wayne%29.mp3
    {
        id: 8,
        name: 'Beliver',
        singer: 'Nsync',
        src: 'https://archive.org/download/imagine-dragons-believer-feat.-lil-wayne/Imagine%20Dragons%20-%20Believer%20%28feat.%20Lil%20Wayne%29.mp3',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/508228c1-bc49-4872-a629-e6d51b1012f0/ddsmzx4-f19b2626-ea66-48d1-a17c-33237ed84d32.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUwODIyOGMxLWJjNDktNDg3Mi1hNjI5LWU2ZDUxYjEwMTJmMFwvZGRzbXp4NC1mMTliMjYyNi1lYTY2LTQ4ZDEtYTE3Yy0zMzIzN2VkODRkMzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NOrGwK40BFUB-VS-hyzeQvJSILn6vtdetZcqeRCi4jA',
        type: 'POP',
    },
    {
        id: 9,
        name: 'Shape of You',
        singer: 'Ed Sheeran',
        src: 'https://archive.org/download/EdSheeranShapeOfYou_201811/Ed%20Sheeran%20-%20Shape%20Of%20You.mp3',
        img: 'https://i1.sndcdn.com/artworks-000222346337-bym8on-t500x500.jpg',
        type: 'POP',
    },
    {
        id: 10,
        name: 'Blue Eyes',
        singer: 'Honey Singh',
        src: 'https://hindi3.djpunjab.app/load/sShCUDssltQaHHLAHg8Ljw==/Blue%20Eyes%20(From%20Blue%20Eyes).mp3',
        img: 'https://hindi3.djpunjab.app/cover/uOmSpgKdt6bjC_3UDu8xuw==/yo-yo-honey-singh-is-back-cover-image.webp',
        type: 'Hip Hop',
    },
    {
        id: 11,
        name: 'Gully Boy',
        singer: 'Honey Singh',
        src: 'https://hindi3.djpunjab.app/load/j1sWoyL0jsuOh5RtWsoDjA==/Gully%20Boy.mp3',
        img: 'https://pbs.twimg.com/media/Dz7ddQ6UwAMblKn.jpg',
        type: 'Hip Hop',
    },
]


const songLists = document.querySelector('.songList');
const songPlayer = document.getElementById('player');
const otherDetails = document.querySelector('.otherDet');
const btnAddList = document.getElementById('btnAddList');
const listOfPl = document.getElementById('listOfPl');
const currentList = document.getElementById('currentList');
const txtCreateList = document.getElementById('txtCreateList');
const btnCreateList = document.getElementById('btnCreateList');
const playlistName = document.querySelectorAll('.pl');
const songName = document.querySelectorAll('songName');
const songType = document.querySelectorAll('.type');
const albumImg = document.getElementById('album');
const backWard = document.getElementById('backWard');
const forWard = document.getElementById('forWard');
const toggleSwitch = document.getElementById('toggleswitch');
const toggleSwitchLbl = document.getElementById('toggleswitchLbl');
const body = document.querySelector('body');
const firstSec = document.querySelector('.all-songs');
const secondSec = document.querySelector('.songCard');
const thirdSec = document.querySelector('.playlists');
let btnSongs = document.querySelectorAll('.song');

let listCount = 0;
let selectedPl = "";
let runningSong;
let playListObj = {};
let selectedPlaylist = [];
let newObj = songObj;

// if(playlistName !== ''){
// playlistName.addEventListener('click',(e)=>{
//     console.log(e);
// })}

const songItemUL = document.createElement('ul');
songLists.appendChild(songItemUL);

// songObj.map((song) => {
//     createLi(song.name);
// })

const renderSongs = (songs)  => {
    songItemUL.innerHTML = ''; // Clear previous song list
    songs.forEach((song) => {
        createLi(song.name);
    });
    // song buttons
    const btnSongs = document.querySelectorAll('.song');
    btnSongs.forEach((song) => {
        song.addEventListener('click', () => {
            runningSong = fetchSong(song.innerHTML);
            playSong(runningSong.src);
            createAlbumArt(runningSong.img);
            createDetailsSec(runningSong.name, runningSong.singer);
        });
    });
}

renderSongs(newObj);

toggleSwitch.addEventListener('change',(e)=>{
    if(e.target.checked){
        body.style.backgroundColor = 'darkgrey';
        toggleSwitchLbl.textContent = 'Light';
        firstSec.style.backgroundColor='lightgrey';
        secondSec.style.backgroundColor='lightgrey';
        thirdSec.style.backgroundColor='lightgrey';
    } else {
        body.style.backgroundColor = 'whitesmoke';
        toggleSwitchLbl.textContent = 'Dark';
        firstSec.style.backgroundColor = 'skyblue';
        secondSec.style.backgroundColor = 'skyblue';
        thirdSec.style.backgroundColor = 'skyblue';
    }
})

// console.log(songType);







// btnSongs.forEach((song) => {
//     song.addEventListener('click', () => {
//         console.log('clicked on song');
//         runningSong = fetchSong(song.innerHTML);
//         // console.log(runningSong);
//         playSong(runningSong.src);
//         createAlbumArt(runningSong.img);
//         createDetailsSec(runningSong.name, runningSong.singer);
//     })
// })

// console.log(btnSongs);
songType.forEach((type)=>{
    type.addEventListener('click',(e)=>{
        // songItemUL.textContent='';
        newObj = songObj.filter((song)=> song.type === e.target.innerHTML);
        // newObj.map((song)=>createLi(song.name));
        renderSongs(newObj);
        // console.log(newObj);
        // console.log(btnSongs);
    })
})
console.log(btnSongs);


btnCreateList.addEventListener('click', () => {
    let listcheckres = playlistNameCheck(txtCreateList.value)
    if (!listcheckres) {
        createPlaylist(txtCreateList.value);
        // selectedPl = txtCreateList.value;
        // saveInPlayList(txtCreateList.value);
        // playListObj = txtCreateList.value;
        // listCount++; 
        txtCreateList.value = '';
        // console.log(playListObj);
    }
    else {
        alert('This names list is already created')
    }
})

btnAddList.addEventListener('click', () => {
    // console.log(runningSong);
    if (selectedPl === "") {
        listCount++;
        let playListName = 'newPlayList' + listCount;
        createPlaylist(playListName);
        selectedPl = playListName;
        createCurrentList(selectedPl);
    } else {
        createCurrentList(selectedPl);
    }
})

function createPlaylist(name) {
    console.log(name);
    if(!playListObj[name]){
        const playlistLi = document.createElement('li');
        listOfPl.appendChild(playlistLi);
        let btnPlName = document.createElement('button');
        btnPlName.className = 'pl';
        btnPlName.textContent = name;
        playlistLi.appendChild(btnPlName);

        // playListObj[name] = [];
        btnPlName.addEventListener('click', () => {
            selectedPl = name;
            createCurrentList(selectedPl);
            // selectedPlaylist = playListObj[selectedPl];
            // console.log(playListObj);  
            // playFromPlaylist(); // Automatically play the first song when a playlist is selected
        });
        // listCount++;
    }
}

const playFromPlaylist = () => {
    console.log(selectedPlaylist);
    if (selectedPlaylist.length > 0) {
        runningSong = selectedPlaylist[0]; // Start with the first song in the playlist
        playSong(runningSong.src);
        createAlbumArt(runningSong.img);
        createDetailsSec(runningSong.name, runningSong.singer);
    }
};


playlistName.forEach((playlist) => {
    playlist.addEventListener('click', () => {
        selectedPl = playlist.innerHTML;
        selectedPlaylist = playListObj[selectedPl];
        console.log(playlist);
        playFromPlaylist(); // Automatically play the first song when a playlist is selected
    });
});

function createCurrentList(listName) {
    saveInPlayList(listName);
    const songLi = document.createElement('li');
    currentList.appendChild(songLi);
    const songBtn = document.createElement('button');
    songBtn.className = 'song';
    songBtn.name = 'songName';
    const res = fetchPlaylist(listName);
    songBtn.textContent = res[runningSong.name].name;
    songLi.appendChild(songBtn);
    // playFromPlaylist();  
}

function rerenderPlaylistSOng(playlistObj){
    
}

function saveInPlayList(listName) {
    let res = playlistSongCheck(playListObj[listName], [runningSong.name]);
    if (!res) {
        playListObj[listName] = { ...playListObj[listName], [runningSong.name]: runningSong };
        console.log(playListObj);
    } else {
        alert(`This song already added in the list`);
    }

}


function playSong(src) {
    songPlayer.src = src;
    songPlayer.type = 'audio/mp3';
    songPlayer.autoplay = true;
    songPlayer.muted = true;
}

function createAlbumArt(img) {
    albumImg.src = img;
}

function createLi(name) {
    const songItemLi = document.createElement('li');
    const songItemBtn = document.createElement('button');
    songItemUL.appendChild(songItemLi);
    songItemBtn.classList.add('song');
    songItemBtn.textContent = name;
    songItemLi.appendChild(songItemBtn);
}

function createDetailsSec(name, singer) {
    otherDetails.textContent = '';
    const nameDet = document.createElement('p');
    nameDet.textContent = name;
    const singerDet = document.createElement('p');
    singerDet.textContent = singer;
    otherDetails.appendChild(nameDet);
    otherDetails.appendChild(singerDet);
}

// function fetchSong(songName="",id=0) {
//     console.log(id);
//     console.log(songName);
//     if(id === 0){
//     return songObj.find((item) => item.name === songName);
// }
// else if(songName === ""){
//     return songObj.find((item) => item.id === id);
// }
// }
function fetchSong(songName = "", id = 0) {
    if (id !== 0) {
        // Find the song by ID
        return songObj.find((item) => item.id === id);
    } else {
        // Find the song by name
        return songObj.find((item) => item.name === songName);
    }
}

function fetchPlaylist(name) {
    for (let key in playListObj) {
        if (key === name) {
            return playListObj[key];
        }
    }
}

function playlistSongCheck(listName, songName) {
    let res = playlistNameCheck(listName);
    if (res) {
        for (subKey in playListObj[key]) {
            if (subKey === songName) {
                return true;
            } else {
                return false;
            }
        }
    } 
}

function playlistNameCheck(name) {
    for (let key in playListObj) {
        if (key === name) {
            return true;
        }
        else {
            return false;
        }
    }
}

backWard.addEventListener('click', ()=>{
    if(runningSong.id !== 1){
        runningSong = fetchSong("",runningSong.id - 1);
        // console.log(res); 
        playSong(runningSong.src);
        createAlbumArt(runningSong.img);
        createDetailsSec(runningSong.name, runningSong.singer);
    }
})
forWard.addEventListener(('click'), ()=>{
    if(runningSong.id !== songObj.length){
        runningSong = fetchSong("",runningSong.id + 1);
        // console.log(res);
        playSong(runningSong.src);
        createAlbumArt(runningSong.img);
        createDetailsSec(runningSong.name, runningSong.singer);
    }
})



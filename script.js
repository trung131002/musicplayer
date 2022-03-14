const songs = [
    {
        name: 'Chuyện đôi ta',
        singer: 'Emcee L(Da LAB), Muội',
        path: './music/ChuyenDoiTa-EmceeLDaLAB-7120974.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/11/25/8/7/5/6/1637809824703.jpg'
    },
    {
        name: 'Yêu đi anh ơi',
        singer: 'NGọc Kayla',
        path: './music/YeuDiAnhOi-NgocKayla-7124708.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/12/30/d/f/6/5/1640831303885.jpg'
    },
    {
        name: 'Dịu dàng em đến',
        singer: 'Erik, NinjaZ',
        path: './music/DiuDangEmDen-ERIKNinjaZ-7078877.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/08/30/2/1/a/e/1630307726211.jpg'
    },
    {
        name: 'Nàng Thơ',
        singer: 'Hoàng Dũng',
        path: './music/NangTho-HoangDung-6413381.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2020/07/31/c/5/8/9/1596188259603_500.jpg'
    },
    {
        name: 'Chuyện rằng',
        singer: 'Thịnh Suy',
        path: './music/ChuyenRang1-ThinhSuy-6465355.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2020/08/07/d/e/f/2/1596786667818_500.jpg'
    },
    {
        name: 'Gác lại âu lo',
        singer: 'Da LAB, Miu Lê',
        path: './music/GacLaiAuLo-DaLABMiuLe-6360815.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2020/07/24/f/6/5/1/1595564868985_500.jpg'
    },
    {
        name: 'Lời nói điêu trên môi em',
        singer: 'Đỗ Nguyên Phúc, Lil Zpoet',
        path: './music/LoiNoiDieuTrenMoiEm-DoNguyenPhucLilZpoet-6829284.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2020/11/18/1/e/7/8/1605693768437_500.jpg'
    },
    {
        name: 'This Way',
        singer: 'Cara',
        path: './music/ThisWay-CARA-6607957.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2020/09/08/c/3/c/2/1599539339388_500.jpg'
    },
    {
        name: 'Tiền nhiều để làm gì',
        singer: 'Gducky',
        path: './music/TienNhieuDeLamGi2-GDucky-6737970.mp3',
        image: 'https://avatar-nct.nixcdn.com/song/2021/11/10/b/0/b/3/1636528528534.jpg'
    },
]

loadMusic()
renderListSong()

// add active to first song 
document.querySelector('.song-item').classList.add('active')

function loadMusic(currentSong = 0) {
    const cdThumb = document.querySelector('.cd-thumb')
    cdThumb.innerHTML = `
        <div class="name-song">${songs[currentSong].name}</div>
        <div class="cd">
            <img src="${songs[currentSong].image}" alt="${songs[currentSong].name}">
        </div>
    `
    const audio = document.querySelector('audio')
    audio.src = songs[currentSong].path
}

function renderListSong() {
    const listSong = document.getElementById('list-song')
    songs.forEach((song, index) => {
        listSong.innerHTML += `
        <li class="song-item" data-index="${index}">
            <div class="song-img">
                <img id="list-img" src="${song.image}" alt="${song.name}">
            </div>
            <div class="song-info">
                <div class="song-name">${song.name}</div>
                <div class="song-artist">${song.singer}</div>
            </div>
        </li>
    `
    })
}

function test(){
    return [
    audio = document.querySelector('audio'),
    listSong = document.querySelectorAll('.song-item')
    ]
}

tests()

function tests(){
    test()[1].forEach((item,index )=> {
        test()[1][index].onclick =function () {
            listSong.forEach((ite,inde) => {
                test()[1][inde].classList.remove('active')
                    test()[0].pause()
            })
            loadMusic(index)
            renderListSong()
            tests();
            test()[1][index].classList.add('active')
            test()[0].src = songs[index].path
            test()[0].play()
        }
    })        
}

// click next song and add class active 
document.querySelector('#next-song').onclick = function () {
    const currentSong = document.querySelector('.active')
    const nextSong = currentSong.nextElementSibling
    const random = document.getElementById('random-song') 
    if (random.classList.contains('yellow')) {
        const loopSong = document.getElementById('loop-song')
        loopSong.classList.remove('yellow')
        const randomSong = Math.floor(Math.random() * songs.length)
        currentSong.classList.remove('active')
        listSong[randomSong].classList.add('active')
        loadMusic(randomSong)
        audio.play()
    } else if (nextSong) {
        currentSong.classList.remove('active')
        nextSong.classList.add('active')
        loadMusic(nextSong.dataset.index)
        audio.play()
    } else {
        currentSong.classList.remove('active')
        listSong[0].classList.add('active')
        loadMusic(0)
        audio.play()
    }
}

// prev song if random has yellow to loop song
document.querySelector('#prev-song').onclick = function () {
    const currentSong = document.querySelector('.active')
    const prevSong = currentSong.previousElementSibling
    const random = document.getElementById('random-song')
    if (random.classList.contains('yellow')) {
        const loopSong = document.getElementById('loop-song')
        loopSong.classList.remove('yellow')
        const randomSong = Math.floor(Math.random() * songs.length)
        currentSong.classList.remove('active')
        listSong[randomSong].classList.add('active')
        loadMusic(randomSong)
        audio.play()
    } else if (prevSong) {
        currentSong.classList.remove('active')
        prevSong.classList.add('active')
        loadMusic(prevSong.dataset.index)
        audio.play()
    } else {
        currentSong.classList.remove('active')
        listSong[listSong.length - 1].classList.add('active')
        loadMusic(listSong.length - 1)
        audio.play()
    }
}

// add class yellow to random-song onclick
document.querySelector('#random-song').onclick = function () {
    const random = document.getElementById('random-song')
    if (random.classList.contains('yellow')) {
        random.classList.remove('yellow')
    } else {
        const loopSong = document.getElementById('loop-song')
        loopSong.classList.remove('yellow')
        random.classList.add('yellow')
    }
}

// loop song
document.getElementById('loop-song').onclick = function () {
    const loopSong = document.getElementById('loop-song')
    if (loopSong.classList.contains('yellow')) {
        loopSong.classList.remove('yellow')
    } else {
        loopSong.classList.add('yellow')
        const random = document.getElementById('random-song')
        random.classList.remove('yellow')
    }
    
    if (loopSong.classList.contains('yellow')) {
        const currentSong = document.querySelector('.active')
        const index = currentSong.dataset.index
        audio.onended = function () {
            listSong[index].classList.add('active')
            loadMusic(index)
            audio.play()
        }
    }
}

// song end after next song
audio.onended = function () {
    let index = songs.findIndex(song => song.name === document.querySelector('.name-song').innerHTML)
    if (index === songs.length - 1) {
        index = 0
    } else {
        index++
    }
    const currentSong = document.querySelector('.active')
    currentSong.classList.remove('active')
    listSong[index].classList.add('active')
    loadMusic(index)
    renderListSong()
    tests()
    audio.play()
}
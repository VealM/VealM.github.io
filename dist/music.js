const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "My Soul",
        artist: 'July',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_62935269&response=res&type=convert_url&',
        cover: 'https://image.bugsm.co.kr/album/images/original/3239/323979.jpg',
    }
    ]
});
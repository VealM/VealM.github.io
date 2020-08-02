const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "My Soul",
        artist: 'July',
        url: 'https://demo.meting.api.meto.moe/action/metingapi?server=tencent&type=song&id=004OQ5Mt0EmEzv',
        cover: 'https://image.bugsm.co.kr/album/images/original/3239/323979.jpg',
    }
    ]
});
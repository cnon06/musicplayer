class Music
{
    constructor (title, singer, img, file)
    {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName()
    {
        return this.title +' / ' + this.singer;
    }
}

const musicList = 
[
    // new Music('Boşver','Nilüfer', '1.jpeg','1.mp3'),
    // new Music('Bu da geçer mi sevgilim?','Yalın', '2.jpeg','2.mp3'),
    // new Music('Aramızda Uçurumlar','Suat SUNA', '3.jpeg','3.mp3'),
   
    new Music('Enough','NEFFEX', 'Enough-NEFFEX.jpg','Enough - NEFFEX.mp3'),
    new Music('Ice & Fire ','King Canyon', 'Ice & Fire-King Canyon.jpg','Ice & Fire - King Canyon.mp3'),
    new Music('Losing My Mind ','NEFFEX', 'Losing My Mind-NEFFEX.jpg','Losing My Mind - NEFFEX.mp3'),
    new Music('Searching For Time','Telecasted', 'Searching For Time-Telecasted.jpg','Searching For Time - Telecasted.mp3'),
    new Music('Streets Of Punjab','Hanu Dixit', 'Streets Of Punjab-Hanu Dixit.jpg','Streets Of Punjab - Hanu Dixit.mp3'),
];
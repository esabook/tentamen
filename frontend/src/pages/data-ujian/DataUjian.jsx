
import image from './img/sample-ujian.webp';


export default function DataUjian() {
  /*
  collapsible card
  card header: {Ujian Kompetensi, Potensi, Mapel}
  card body:
    horizontal grid card:
      left: image
      right: title {Matematika, Test 1}
            date {Senin, 1 july 2025}
            time {09:00 - 12:00 WIB}
            duration {2 jam }
            button {Mulai Ujian, Ujian Telah Selesai, Ujian Belum Dimulai}

  */
  return (
    <div>
      Halaman Data Ujian <img src={image} />{' '}
    </div>
  );
}

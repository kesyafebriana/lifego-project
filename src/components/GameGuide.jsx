import React from "react";

const GameGuide = props => {
  return (
    <div className="popup-box">
      <div className='popup-container'>
        <img src={props.pict} className='popup-background'/>
        <div className="popup-description">
          1. Status pemain akan bertambah sebanyak 10% setiap tombol diklik dan berkurang sebanyak 10% setiap 1 jam permainan.
          <br/>2. Terdapat 4 lokasi yang bisa dipilih pemain ketika bermain permainan lifeGo, yaitu cafe, kampus, supermarket, dan rumah.
          <br/>3. Saat berada di cafe, pemain bisa makan, minum, dan ngobrol.
          <br/>4. Saat berada di kampus, pemain bisa makan, belajar, dan bermain.
          <br/>5. Saat berada di supermarket, pemain bisa minum, belanja, dan bayar (optional).
          <br/>6. Saat berada di rumah, pemain bisa makan, tidur, dan masak.
          <br/>7. Ekspresi karakter akan berubah sesuai dengan kegiatan yang pemain pilih.
          <br/>8. Background akan berubah sesuai dengan tempat dan cuaca saat pemain memainkan game lifeGo.
          <br/>9. Setelah 7 hari bermain, lifeGo akan memberikan evaluasi dalam bentuk rapor yang menyimpulkan kegiatan selama 7 hari tersebut.
          <br/>10. Message terhadap pemain di page evaluasi tergantung kegiatannya selama 7 hari.
        </div>
        
        <button className="close-button" type="button" onClick={props.handleClose}></button>
        <img src={props.closeButton} className='close-button' onClick={props.handleClose} />
      </div>
    </div>
  );
};

export default GameGuide;
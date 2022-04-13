var images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UggsfJ2Hy6OMa9QxTWfQ_TpqwvQ7uE5u7GyQojC8w7jEs7_GqKIqFX_gJY70txxjqDo&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_T2yzOHbXm6Wlf3I3Ce09Uxn7-7910S6cWXTRmUx4GTc4uDMsDJA5jmoQmsOvvLiHHT8&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUQuKEYaaB42SY8Yml17zHrZ7Bck2negdBpD5DkIroASXSWvFtcr2mfWVqvIUq1KZn5M&usqp=CAU'
];
var index = 0;

function rotate() {
  index++;
  if (index === images.length) {
    index = 0;
  }
  document.getElementById("picture").style = "background-image: url('" + images[index] + "');";

  setTimeout("rotate()", 1000);
}

window.onload = rotate;

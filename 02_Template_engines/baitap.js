/**
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. Bạn hiểu thế nào là Single page application (SPA)
 * 2. Bạn hiểu thế nào là Multiple page application (MPA)
 * 3. Những điểm lợi và điểm bất lợi khi sử dụng SPA và MPA
 */

function answer() {
  // Ghi câu trả lời của bạn bên trong 2 dấu ``
  return `
  1. Single page application (SPA) tương tác với server bằng ajax request và ta không có chuyển trang trong đó (không reload lại page), render content ở frontend, tương tác với data thông qua Json API.

  2. Multiple page application (MPA) là kiểu chuyển trang truyền thống sau khi chuyển thì reload lại page
  render content ở server.

  3. cái nào cũng có mặt lợivà mặt bất lợi. Nếu 1 app nhỏ mà không cần trải nghiệm cực kì tốt thì không cần dùng đến SPA có thể dùng MPA vì code nhanh hơn nó giảm thời gian. Nhưng nếu app phức tạp logic phía frontend nhiều thì ta nên dùng SPA.
  `;
}

/**
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. Pug là gì?
 * 2. Công dụng, chức năng
 * 3. Vì sao nên dùng Pug
 */

function answer() {
  // Ghi câu trả lời của bạn bên trong 2 dấu ``
  return `
  Pug là 1 template engine. Viết ngắn gọn lại HTML và nó chuyển từ Pug sang HTML, tiện lợi và ngắn gọn và hỗ trợ nhiều hơn HTML
  `
}
/**
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. Phân biệt JavaScript, Nodejs, Express như thế nào?
 */

function answer() {
  // Ghi câu trả lời của bạn bên trong 2 dấu ``
  return `
    JavaScript là ngôn ngữ lập trình.
    Nodejs là nền tảng để chạy.
    Còn Express là framework dùng ngôn ngữ javascript và chạy trên môi trường Nodejs.
  `;
}


/**
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. Static web server khác Dynamic web server ở điểm nào?
 */

function answer() {
  // Ghi câu trả lời của bạn bên trong 2 dấu ``
  return `
    khác nhau ở 1 cái là web server động một cái là web server tĩnh.
    Static web server chứa những file tĩnh (html,css,js,...) khi ta yêu cầu gì thì nó sẽ tìm thứ ta yêu cầu nếu không thấy nó sẽ trả về not found.
    Còn Dynamic web server nó có thể tương tác với database, tương tác với client một cách logic chứ không đơn giản chỉ là yêu cầu gì trả về cái đó.  
  `
}


/**
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. Liệt kê các bước để setup 1 Project sử dụng Express
 */

function answer() {
  // Ghi câu trả lời của bạn bên trong 2 dấu ``
  return `
    B1: khởi tạo node module: npm init.
    B2: Cài đặt module Expressjs: npm install express --save.
    B3: require module express, tạo instance express() và khởi tạo port cho server, listen truyền port vào.
    B4: Code nội dung.
    B5: Chạy file js.
  `
}
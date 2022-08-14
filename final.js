window.addEventListener("load", function () {
  // chỉ thực hiện lệnh ở dưới khi toàn bộ trang đc load
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (event) {
    // khi di chuột vào class text thì có event, di chuyển vào span
    const title = event.target.dataset.tooltip;
    // nó sẽ lấy ra đc data-tooltip từ span để in ra Welcom
    const tooltipDiv = document.createElement("div");
    // thêm 1 div có tên là tooltivDiv, thẻ div là block nên nó sẽ hiện lên trên chữ Hello world
    tooltipDiv.className = "tooltip-text";
    // thêm thẻ class cho tooltipDiv
    tooltipDiv.textContent = title;
    // gán xong thì in ra content
    document.body.appendChild(tooltipDiv);
    // trình tự : gán, trỏ vào thuộc tính muốn lấy ra -> tạo thêm thẻ div để khi click vào mới hiện ra
    // -> thêm class vào thẻ div đó để hiện ra theo css đã tạo

    // muốn lấy đc vị trí của Hello world để đặt tooltip lên đúng phía trên thì
    const cords = event.target.getBoundingClientRect();
    // khi di chuột vào sẽ thấy đc tọa độ của thằng text
    const { top, left, width } = cords;
    // tạo tọa độ cho cords là phần tử khi di chuột vào
    const tooltipHeight = tooltipDiv.offsetHeight;
    const triangleHeight = 20;

    // thêm style vào cho tooltivDiv
    tooltipDiv.style.left = `${left - width / 2}px`;
    tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
  });
  text.addEventListener("mouseleave", function (event) {
    const tooltip = document.querySelector(".tooltip-text");
    if (!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  });
});

const paint = (
  canvas: HTMLCanvasElement,
  fillColor: string,
  lineWidth: number,
  listen = true
) => {
  // 判断是否是触屏设备
  const isTouchDevice = 'ontouchstart' in document.documentElement;
  // 初始化线条
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = fillColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
  }
  // 画线
  function drawline(x1: number, y1: number, x2: number, y2: number) {
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
  let painting = false;
  // 存储最新的位置
  let last: number[];

  // 触屏设备处理函数
  function draw1(c: TouchEvent) {
    painting = true;
    const x = c.touches[0].pageX;
    const y = c.touches[0].pageY;
    last = [x, y];
  }
  function draw2(c: TouchEvent) {
    painting = true;
    const x = c.touches[0].pageX;
    const y = c.touches[0].pageY;
    drawline(last[0], last[1], x, y);
    last = [x, y];
  }
  function draw3() {
    painting = false;
  }

  // 电脑设备处理函数
  function draw4(e: MouseEvent) {
    painting = true;
    last = [e.offsetX, e.offsetY];
  }
  function draw5(e: MouseEvent) {
    if (painting) {
      drawline(last[0], last[1], e.offsetX, e.offsetY);
      last = [e.offsetX, e.offsetY];
    }
  }
  // 取消事件监听
  const cancel = () => {
    if (isTouchDevice) {
      canvas.removeEventListener('touchstart', draw1, false);
      canvas.removeEventListener('touchmove', draw2, false);
      canvas.removeEventListener('touchend', draw3, false);
    } else {
      canvas.removeEventListener('mousedown', draw4);
      canvas.removeEventListener('mousemove', draw5);
      canvas.removeEventListener('mouseup', draw3);
    }
  };
  const test = document.getElementById('clear');
  test!.addEventListener('click', () => {
    cancel();
  });

  // 添加事件监听器
  if (isTouchDevice && listen) {
    canvas.addEventListener('touchstart', draw1, false);
    canvas.addEventListener('touchmove', draw2, false);
    canvas.addEventListener('touchend', draw3, false);
  } else if (!isTouchDevice && listen) {
    canvas.addEventListener('mousedown', draw4);
    canvas.addEventListener('mousemove', draw5);
    canvas.addEventListener('mouseup', draw3);
  }
};

export default paint;

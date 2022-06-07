const transImg = {
  // 将input数据读取成img标签
  fileToImg: (file: Blob) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const URL = window.webkitURL || window.URL;
      if (URL) {
        const url = URL.createObjectURL(file);
        image.onload = function () {
          resolve(image);
          URL.revokeObjectURL(url);
        };
        image.onerror = function (err) {
          reject(err);
          URL.revokeObjectURL(url);
        };
        image.src = url;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onerror = function (err) {
          reject(err);
        };
        reader.onload = function () {
          image.src = reader.result as string;
          image.onload = function () {
            resolve(image);
          };
        };
      }
    });
  },
  // 将url转成图片，返回值为img标签
  urlToImg: (url: string) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (err) => {
        reject(err);
      };
    });
  },
  // 将input读取的文件转变成base64字符串
  fileToUrl: (file: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onerror = function (err) {
        reject(err);
      };
      reader.onload = function () {
        resolve(reader.result as string);
      };
    });
  },
  // 将img标签用canvas来绘制返回一个canvas标签
  imageToCanvas: (img: HTMLImageElement, width = 100, height = 100) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 50;
    canvas.height = 50;
    // @ts-ignore
    ctx!.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, width, height);
    return canvas;
  },
  // canvas内容转化成img然后将img画在另一个新的canvas上以达到设置canvas背景颜色的效果
  canvasToUrl: (
    canvas: HTMLCanvasElement,
    quality: number,
    type: string,
    background: string,
    height: number
  ) => {
    return new Promise((resolve, reject) => {
      // 转成图片
      const url = canvas.toDataURL(type || 'image/png', quality || 1);
      const image = new Image();
      image.src = url;
      // 将图片画在新的canvas上
      const createCvs = document.createElement('canvas');
      const ctx = createCvs.getContext('2d');
      createCvs.width = document.body.getBoundingClientRect().width;
      createCvs.height = height;
      ctx!.fillStyle = background || 'white';
      ctx!.fillRect(0, 0, document.body.getBoundingClientRect().width, height);
      image.onload = () => {
        ctx!.drawImage(
          image,
          0,
          0,
          document.body.getBoundingClientRect().width,
          height
        );
        resolve(createCvs.toDataURL(type || 'image/png', quality || 1));
      };
      image.onerror = (err) => {
        reject(err);
      };
    });
  },

  // canvas内容转化成img标签
  canvasToImg: (canvas: HTMLCanvasElement, quality: number, type: string) => {
    return new Promise((resolve, reject) => {
      const url = canvas.toDataURL(type || 'image', quality || 1);
      const image = new Image();
      image.src = url;
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (err) => {
        reject(err);
      };
    });
  },
  dataURLtoBlob: (dataurl: string) => {
    const arr: string[] = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
};

export default transImg;

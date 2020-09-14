window.onload = () => {
    const canvas = document.getElementById('mainCanvas');
    const ladderCtx = canvas.getContext('2d');
    //사각형 크기 설정
    function getRectSize(canvasWidth, divide) {
        const width = (canvasWidth / divide - 1);
        const heigth = 10;

        return {
            width: width,
            height: heigth
        }
    }

    //사각형 그리기
    function setRectCanvas(count) {
        const boxSizeObj = getRectSize(canvas.width, count);
        let divideLine = 0;
        let pointX = 10;
        let canvasH = canvas.height;
        for (let i = 0; i < count; i++) {
            divideLine += boxSizeObj.width;
            console.log(divideLine);
            console.log(divideLine - pointX);
            console.log(divideLine - pointX);
            ladderCtx.fillStyle = 'rgb(136, 147, 166)';
            ladderCtx.fillRect(divideLine - pointX, canvasH - 10, canvas.width - count * 2, boxSizeObj.height);
            ladderCtx.fillStyle = 'rgb(136, 147, 166)';
            ladderCtx.fillRect(divideLine - pointX, canvasH - 50, canvas.width - count * 2, boxSizeObj.height);
            pointX += 20;
        }
    }

    setRectCanvas(3);
}
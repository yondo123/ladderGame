window.onload = () => {
    const canvas = document.getElementById('mainCanvas');
    const ladderCtx = canvas.getContext('2d');

    //이벤트 지정
    const nextBtn = document.getElementById('nextButton');
    const prevBtn = document.getElementById('prevButton');

    nextBtn.addEventListener('click', function() {
        let count = document.getElementById('textArea').value;
        document.getElementById('textArea').value = Number(count) + 1;
    });

    prevBtn.addEventListener('click', function() {
        let count = document.getElementById('textArea').value;
        if (Number(count) != 0) {
            document.getElementById('textArea').value = Number(count) - 1;
        }
    });

    //사각형 크기 설정
    function getRectSize(canvasWidth, divide) {
        const divSize = (canvasWidth / divide - 1);
        const width = (divSize / 10) * 8;
        const heigth = 5;

        return {
            width: width,
            height: heigth
        }
    }

    //사각형 그리기
    function setRectCanvas(count) {
        const boxSizeObj = getRectSize(canvas.width, count);
        const boxWidth = boxSizeObj.width;
        const boxHeight = boxSizeObj.height;
        let divideLine = 0;
        let interval = 0;
        let canvasH = canvas.height;
        for (let i = 0; i < count; i++) {
            console.log('나눔선' + divideLine);
            console.log('너비 ' + boxSizeObj.width);

            ladderCtx.fillStyle = 'rgb(136, 147, 166)';
            ladderCtx.fillRect(divideLine, 10, boxWidth, boxHeight);
            ladderCtx.fillStyle = 'rgb(136, 147, 166)';
            ladderCtx.fillRect(divideLine, canvasH - 10, boxWidth, boxHeight);
            divideLine += canvas.width / count - 1;
            interval = (divideLine - boxWidth) * 0.2;
        }
    }

    //박스 간 선 잇기
    function drawLines() {

    }

    setRectCanvas(5);
}
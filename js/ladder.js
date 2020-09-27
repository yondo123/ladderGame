window.onload = () => {
    //전역변수 
    let trunkArray = [];

    //Element 변수
    const startButton = document.querySelector('#startButton');
    const canvas = document.getElementById('mainCanvas');
    const ladderCtx = canvas.getContext('2d');

    //이벤트 지정
    const nextBtn = document.getElementById('nextButton');
    const prevBtn = document.getElementById('prevButton');
    const createBtn = document.getElementById('createButton');

    //인원 중가
    nextBtn.addEventListener('click', function() {
        let count = document.getElementById('textArea').value;
        document.getElementById('textArea').value = Number(count) + 1;
    });

    //인원 감소
    prevBtn.addEventListener('click', function() {
        let count = document.getElementById('textArea').value;
        if (Number(count) != 0) {
            document.getElementById('textArea').value = Number(count) - 1;
        }
    });

    //게임 생성
    createBtn.addEventListener('click', function() {
        let boxCount = Number(document.getElementById('textArea').value);
        if (boxCount < 1) {
            startButton.disabled = true;
            alert('인원은 최소 1명 이상입니다!');
        } else {
            startButton.disabled = false;
            setRectCanvas(boxCount);
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
        resetCanvas();
        trunkArray = [];
        const boxRgbLayor = 'rgb(136, 147, 166)'
        const boxSizeObj = getRectSize(canvas.width, count);
        const boxWidth = boxSizeObj.width;
        const boxHeight = boxSizeObj.height;
        let divideLine = 0;
        let interval = 0;
        let canvasH = canvas.height;
        for (let i = 0; i < count; i++) {
            if (i != 0 || i != count - 1) {
                trunkArray.push(getRandomInt(0, 10));
                console.log(trunkArray);
            }
            console.log('나눔선' + divideLine);
            console.log('너비 ' + boxSizeObj.width);
            ladderCtx.fillStyle = boxRgbLayor;
            ladderCtx.fillRect(divideLine, 10, boxWidth, boxHeight);
            ladderCtx.fillStyle = boxRgbLayor;
            ladderCtx.fillRect(divideLine, canvasH - 10, boxWidth, boxHeight);
            divideLine += canvas.width / count - 1;
            interval = (divideLine - boxWidth) * 0.2;
        }

    }

    //박스 간 선 잇기
    function drawLines() {
        //trunkArray 활용한다.
    }

    //캔버스 초기화
    function resetCanvas() {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    }

    //난수 생성 (사다리 간선)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

}
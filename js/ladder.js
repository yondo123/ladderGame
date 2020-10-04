window.onload = () => {
    //전역변수 
    let initLineArray = []; /* 라인 시작위치 배열 */
    let trunkArray = []; /*간선 배열*/
    let boxCount = 0; /* 박스 갯수 */

    //Element 변수
    const startButton = document.querySelector('#startButton');
    const canvas = document.getElementById('mainCanvas');
    const ladderCtx = canvas.getContext('2d');
    const nextBtn = document.getElementById('nextButton');
    const prevBtn = document.getElementById('prevButton');
    const createBtn = document.getElementById('createButton');
    const resultBtn = document.getElementById('resetButton');

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
        boxCount = Number(document.getElementById('textArea').value);
        if (boxCount < 2) {
            startButton.disabled = true;
            alert('인원은 최소 2명 이상입니다!');
        } else {
            setRectCanvas(boxCount);
        }
    });

    //게임 시작
    startButton.addEventListener('click', function() {
        startButton.disabled = true;
        resultBtn.disabled = false;
        drawLines();
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
        const boxRgbLayor = 'rgb(136, 147, 166)';
        const boxSizeObj = getRectSize(canvas.width, count);
        const boxWidth = boxSizeObj.width;
        const boxHeight = boxSizeObj.height;
        let divideLine = 0;
        let canvasH = canvas.height;
        for (let i = 0; i < count; i++) {
            if (i > 0 && i < count) {
                //getRandomInt 맥스값 : box아래 px, 최소값 아랫 박스 px;
                trunkArray.push(getRandomInt(1, 10));
                console.log('brunch Count>>' + trunkArray);
            }
            console.log('나눔선' + divideLine);
            console.log('너비 ' + boxSizeObj.width);
            ladderCtx.fillStyle = boxRgbLayor;
            ladderCtx.fillRect(divideLine, 10, boxWidth, boxHeight);
            ladderCtx.fillStyle = boxRgbLayor;
            ladderCtx.fillRect(divideLine, canvasH - 10, boxWidth, boxHeight);
            initLineArray.push(divideLine + boxWidth / 2);
            divideLine += canvas.width / count - 1;
        }

    }
    //박스 간 선 잇기
    function drawLines() {
        console.log('ladder Game Start!!');
        for (let i = 0; i < initLineArray.length; i++) {
            const centre = initLineArray[i];
            let startY = 15;
            let finishY = canvas.height - 10;
            ladderCtx.lineWidth = 3;
            ladderCtx.moveTo(centre, startY);
            ladderCtx.lineTo(centre, finishY);
            //간선 잇기
            for (let j = 0; j < trunkArray[i]; j++) {
                const brunchY = getRandomInt(startY + 2, finishY - 2);
                const brunchFinish = initLineArray[i + 1];
                ladderCtx.moveTo(centre, brunchY);
                ladderCtx.lineTo(brunchFinish, brunchY);
            }
            ladderCtx.strokeStyle = 'rgb(136, 147, 166)';
            ladderCtx.stroke();
        }
    }

    //캔버스 초기화
    function resetCanvas() {
        resultBtn.disabled = true;
        startButton.disabled = false;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        boxCount = 0;
        trunkArray = [];
        initLineArray = [];
    }

    //난수 생성
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

}
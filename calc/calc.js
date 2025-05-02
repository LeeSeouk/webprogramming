let currentExpression = "";

function updateDisplay() { //화면에 값을 띄움
  const display1 = document.getElementById("display1");
  const display2 = document.getElementById("display2");
  if (display1) display1.value = currentExpression;
  if (display2) display2.value = currentExpression;
}

function numberButton(num) { //숫자 입력
  currentExpression += num.toString();
  updateDisplay();
}

function periodButton() { //소숫점
  if (!currentExpression.endsWith(".")) {
    currentExpression += ".";
    updateDisplay();
  }
}

function changeSign() { //+/- 부호

  currentExpression = "-(" + currentExpression + ")";
  updateDisplay();
}

function plusButton() { //덧셈
  currentExpression += "+";
  updateDisplay();
}

function minusButton() { //뺄셈
  currentExpression += "-";
  updateDisplay();
}

function xButton() { //곱셈
  currentExpression += "*";
  updateDisplay();
}

function divButton() { //나눗셈
  currentExpression += "/";
  updateDisplay();
}

function equalButton() { //계산값 도출
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch {
    currentExpression = "Error";
    updateDisplay();
  }
}

function CEButton() { //계산창 청소
  currentExpression = "";
  updateDisplay();
}

function sqrtButton() { //제곱근
  currentExpression = `Math.sqrt(${currentExpression})`;
  equalButton();
}

function percentButton() { //퍼센트
  currentExpression += "/100";
  updateDisplay();
}

function piButton() { //파이값
  currentExpression += Math.PI.toString();
  updateDisplay();
}

function xxButton() { //제곱
  currentExpression += "**2";
  updateDisplay();
}

function MCButton() { //메모리클리어
  memory = 0;
}

function MPlusButton() { //메모리플러스
  memory += parseFloat(currentExpression);
}

function MMinusButton() { //메모리마이너스
  memory -= parseFloat(currentExpression);
}

function MRButton() { //메모리리콜
  currentExpression += memory.toString();
  updateDisplay();
}

function RtwoButton() { //소수점 둘째 자리까지 출력
  currentExpression = Math.round(currentExpression * 100) / 100;
  updateDisplay();
}

function RzeroButton() { //소수점 떼고 출력
  currentExpression = Math.round(currentExpression);
  updateDisplay();
}

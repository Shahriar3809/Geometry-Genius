function calculateTriangleArea() {
    const triangleB = document.getElementById('triangleB').value;
    const triangleH = document.getElementById('triangleH').value;
    const base = parseFloat(triangleB);
    const height = parseFloat(triangleH);
    const calc = 1/2 * base * height;



    const resultArea = document.getElementById('result');
    const newCalcRes = document.createElement('p');
    newCalcRes.innerText = `Your Tringle Area is: ${calc} cm`;
    resultArea.appendChild(newCalcRes);

    console.log(calc);
    document.getElementById('triangleB').value = '';
    document.getElementById('triangleH').value = '';
}




function calculateRectangleArea() {
    const rectangleB = document.getElementById('rectangleB').value;
    const rectangleL = document.getElementById('rectangleL').value;
    const base = parseFloat(rectangleB);
    const height = parseFloat(rectangleL);
    const calc = base * height;
      

    const resultArea = document.getElementById('result');
    const newCalcRes = document.createElement('p');
    newCalcRes.innerText = `Your Rectangle Area is: ${calc} cm`;
    resultArea.appendChild(newCalcRes);

    console.log(calc);
    document.getElementById('rectangleB').value = '';
    document.getElementById('rectangleL').value = '';
}



function calculateParallelogramArea(){
    const parallelogramB = document.getElementById('parallelogramB').value;
    const parallelogramH = document.getElementById('parallelogramH').value;
    const base = parseFloat(parallelogramB);
    const height = parseFloat(parallelogramH);
    const calc = base * height;
      

    const resultArea = document.getElementById('result');
    const newCalcRes = document.createElement('p');
    newCalcRes.innerText = `Your parallelogram Area is: ${calc} cm`;
    resultArea.appendChild(newCalcRes);

    console.log(calc);
    document.getElementById('parallelogramB').value = '';
    document.getElementById('parallelogramH').value = '';
}





function calculateRhombusArea(){
    const rhombusD1 = document.getElementById('rhombusD1').value;
    const rhombusD2 = document.getElementById('rhombusD2').value;
    const base = parseFloat(rhombusD1);
    const height = parseFloat(rhombusD2);
    const calc = 1/2 * base * height;
      

    const resultArea = document.getElementById('result');
    const newCalcRes = document.createElement('p');
    newCalcRes.innerText = `Your rhombus Area is: ${calc} cm`;
    resultArea.appendChild(newCalcRes);

    console.log(calc);
    document.getElementById('rhombusD1').value = '';
    document.getElementById('rhombusD2').value = '';
}






function calculatePentagonArea(){
    const pentagonP = document.getElementById('pentagonP').value;
    const pentagonB = document.getElementById('pentagonB').value;
    const base = parseFloat(pentagonP);
    const height = parseFloat(pentagonB);
    const calc = 1/2 * base * height;
      

    const resultArea = document.getElementById('result');
    const newCalcRes = document.createElement('p');
    newCalcRes.innerText = `Your pentagon Area is: ${calc} cm`;
    resultArea.appendChild(newCalcRes);

    console.log(calc);
    document.getElementById('pentagonP').value = '';
    document.getElementById('pentagonB').value = '';
}






function calculateEllipseArea() {
    const ellipseA = document.getElementById('ellipseA').value;
    const ellipseB = document.getElementById('ellipseB').value;
    const base = parseFloat(ellipseA);
    const height = parseFloat(ellipseB);
  
    const calc = (Math.PI * base * height).toFixed(3);
    const resultArea = document.getElementById('result');
    const newCalcRes = document.createElement('p');
    const p = newCalcRes.innerText = `Your Ellipse Area is: ${calc} cm`;
    newCalcRes.style.fontSize = '20px';
    resultArea.appendChild(newCalcRes);

    console.log(calc);
    document.getElementById('ellipseA').value = '';
    document.getElementById('ellipseB').value = '';
}

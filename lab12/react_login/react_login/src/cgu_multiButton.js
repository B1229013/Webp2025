const styleArgument = {fontSize: '100px',coloe: 'red'};

const changeText = (event) => {
    console.log(event.target);
    event.target.innerText += " 被點了";  // Append " 被點了" to the button text
  };
  
const MultiButton = (num) => {
    let output = [];
    for (let i = 1; i <= num; ++i) {
      output.push(
        <button key={i} onClick={changeText}>第{i}個按鈕</button>  // Dynamically create buttons
      );
    }
    return output;  // Return the array of buttons after the loop
};

export default MultiButton;
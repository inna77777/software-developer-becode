/** @format */

//todo
const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0]; // body element
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  newDiv.classList.add(e.target.classList[1]);
  // append to body
  wrapper.appendChild(newDiv);
  //addng event listener to generated squares
  newDiv.addEventListener("click", function () {
    alert(`${e.target.classList[1]}`);
  });
  //add li
  let selectUl = document.querySelector("ul");
  let log = document.createElement("li");
  selectUl.appendChild(log);
  log.innerHTML = `[${getElapsedTime()}] Created a new ${
    e.target.classList[1]
  } square`;
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
//working with spacebar ---------------------------------------------------------------------------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
      let num1 = Math.floor(Math.random() * 255);
      let num2 = Math.floor(Math.random() * 255);
      let num3 = Math.floor(Math.random() * 255);
      let randomRgb = `rgb(${num1}, ${num2}, ${num3})`;
      document.body.style.backgroundColor = randomRgb;
      let selectUl = document.querySelector("ul");
      let log = document.createElement("li");
      selectUl.appendChild(log);
      log.innerHTML = `[${getElapsedTime()}] hit spacebar. Color displayed ${randomRgb}`;
    }
  });
});
//deleting---------------------------------------------------------------------------------------------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 76) {
      let selectUl = document.querySelector("ul");
      //console.log(selectUl.children)
      if (selectUl.children.length > 0) {
        selectUl.lastChild.remove();
      } else {
        console.log("the list is empty");
      }
    }
  });
});
//deleting generated  squares------------------------------------------------------------------------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 83) {
      let selectDisplayedSquare = document.querySelector(
        ".displayedsquare-wrapper"
      );
      while (selectDisplayedSquare.firstChild) {
        selectDisplayedSquare.removeChild(selectDisplayedSquare.firstChild);
      }
    }
  });
});
// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
//todo
// const _initTime = Date.now();

// const getElapsedTime = () => {
//   return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
// };

// const clickOnSquare = (e) => {
//   const color = e.target.classList[1];
//   console.log(`Color: ${color}`);
//   console.log(`Time: ${getElapsedTime()}`);

//   const wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0];
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("displayedsquare");
//   newDiv.classList.add(color);

//   const logList = document.querySelector("ul");
//   const newLogItem = document.createElement("li");
//   newLogItem.textContent = `Generated square with color ${color} at ${getElapsedTime()}`;
//   logList.appendChild(newLogItem);

//   wrapper.appendChild(newDiv);
// };

// const actionSquares = document.querySelectorAll(".actionsquare");
// for (let actionSquare of actionSquares) {
//   actionSquare.addEventListener("click", clickOnSquare);
// }

// const deleteLog = () => {
//   const logList = document.querySelector("ul");
//   while (logList.firstChild) {
//     logList.removeChild(logList.firstChild);
//   }
// };

// const deleteSquares = () => {
//   const squares = document.querySelectorAll(".displayedsquare");
//   for (let square of squares) {
//     square.remove();
//   }
// };

// document.addEventListener("keydown", (e) => {
//   if (e.code === "Space") {
//     const randomColor = ["green", "violet", "orange"][
//       Math.floor(Math.random() * 3)
//     ];
//     document.body.style.backgroundColor = randomColor;

//     const logList = document.querySelector("ul");
//     const newLogItem = document.createElement("li");
//     newLogItem.textContent = `Changed background color to ${randomColor} at ${getElapsedTime()}`;
//     logList.appendChild(newLogItem);
//   } else if (e.code === "KeyL") {
//     deleteLog();
//   } else if (e.code === "KeyS") {
//     deleteSquares();
//   }
// });

// const squareColors = ["green", "violet", "orange"];
// const squaresWrapper = document.querySelector(".displayedsquare-wrapper");

// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("displayedsquare")) {
//     const color = e.target.classList[1];
//     alert(`The color of the clicked square is ${color}`);
//   }
// });

// document.addEventListener("keydown", (e) => {
//   if (e.code === "Space") {
//     const randomColor = squareColors[Math.floor(Math.random() * 3)];
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("displayedsquare");
//     newDiv.classList.add(randomColor);

//     squaresWrapper.appendChild(newDiv);

//     const logList = document.querySelector("ul");
//     const newLogItem = document.createElement("li");
//     newLogItem.textContent = `Generated square with color ${randomColor} at ${getElapsedTime()}`;
//     logList.appendChild(newLogItem);
//   } else if (e.code === "KeyL") {
//     deleteLog();
//   } else if (e.code === "KeyS") {
//     deleteSquares();
//   }
// });

// const formAge = document.querySelector("#age-form");
// const inputElements = document.querySelectorAll(".card__input");
// const errorMessage = document.querySelectorAll(".card__errorMessage");
// const calculAge = document.querySelector(".card__button");

// const validateDay = (day) => {
//   if (day && day > 0 && day <= 31) {
//     return true;
//   }
// };

// const validateMonth = (month) => {
//   if (month && month > 0 && month <= 12) {
//     return true;
//   }
// };

// const validateYear = (year) => {
//   const currentYear = new Date().getFullYear();
//   if (year && year > 0 && year <= currentYear) {
//     return true;
//   }
// };

// function calculateAge(year, month, day) {
//   const today = new Date();
//   const birthdate = new Date(year, month - 1, day);
//   let age = today.getFullYear() - birthdate.getFullYear();
//   const monthDiff = today.getMonth() - birthdate.getMonth();

//   if (
//     monthDiff < 0 ||
//     (monthDiff === 0 && today.getDate() < birthdate.getDate())
//   ) {
//     age--;
//   }
//   return age;
// }

// const isDateValid = (dayElement, monthElement, yearElement) => {
//   let isValid = [false, false, false];

//   if (!validateDay(dayElement.value)) {
//     dayElement.classList.add("card__input--error");
//   } else {
//     isValid[0] = true;
//     dayElement.classList.remove("card__input--error");
//   }

//   if (!validateMonth(monthElement.value)) {
//     monthElement.classList.add("card__input--error");
//   } else {
//     isValid[1] = true;
//     monthElement.classList.remove("card__input--error");
//   }

//   if (!validateYear(yearElement.value)) {
//     yearElement.classList.add("card__input--error");
//   } else {
//     isValid[2] = true;
//     yearElement.classList.remove("card__input--error");
//   }

//   return isValid.every((item) => item === true);
// };

// const onClickHandler = () => {
//   const dayElement = document.querySelector(".card__input[name='day']");
//   const monthElement = document.querySelector(".card__input[name='month']");
//   const yearElement = document.querySelector(".card__input[name='year']");
//   const resultElement = document.querySelector(".card__resultValue");

//   if (!isDateValid(dayElement, monthElement, yearElement)) {
//     resultElement.textContent = "--";
//     return;
//   }

//   resultElement.textContent = calculateAge(
//     yearElement.value,
//     dayElement.value,
//     monthElement.value
//   );
// };

// inputElements.forEach((item) => {
//   item.addEventListener("keydown", (event) => {
//     event.key === "Enter" && onClickHandler();
//   });
// });

// calculAge.addEventListener("click", onClickHandler);

/* My Solution */

//Age calculate function
const calculateButton = document.querySelector(".card__button");
const inputElements = document.querySelectorAll(".card__input");

function calculeAge(day, month, year) {
  const currentDate = new Date();
  let age = currentDate.getFullYear() - year;

  if (
    month > currentDate.getMonth() + 1 ||
    (month === currentDate.getMonth() + 1 && day > currentDate.getDate())
  ) {
    age--;
  }

  return age;
}

function clickHandler() {
  const resultValue = document.querySelector(".card__resultValue");

  resultValue.textContent = calculeAge(
    inputElements[0].value,
    inputElements[1].value,
    inputElements[2].value
  );
}

inputElements.forEach((e) =>
  e.addEventListener("keydown", (e) => {
    e.key === "Enter" && clickHandler();
  })
);

{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.52;
    const rateUSD = 4.11;
    const rateCHF = 4.52;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "CHF":
        return amount / rateCHF;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const amountPlnElement = document.querySelector(".js-pln");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const amount = +amountPlnElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    {
      const sum = (amount, result) =>
        (resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(
          2
        )} ${currency}`);

      sum(amount, result);
    }
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}

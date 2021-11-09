(function () {
  var stripe = Stripe(
    "pk_live_51JmoNAHBXGNcJIH4gxo89qQcJkMChaQ8jYwuFEx739XwJ02Y4jwydXCytHjxKhvliYZYe4cQSqyLoK4H4Z7ZfKrG00TjNqaeeG"
  );

  var headers = ["One-time", "Monthly", "Annual"];

  var rows = [
    [
      {
        amount: 5,
        key: "price_1JtkoTHBXGNcJIH40BxXYI0W",
      },
      {
        amount: 5,
        key: "price_1JtkmWHBXGNcJIH4p9CkMisL",
      },
      {
        amount: 60,
        key: "price_1JtkJuHBXGNcJIH4M3fKlxCB",
      },
    ],
    [
      {
        amount: 25,
        key: "price_1JtkoTHBXGNcJIH4jLJjnR0S",
      },
      {
        amount: 25,
        key: "price_1JtkmWHBXGNcJIH4A6Q9ulCB",
      },
      {
        amount: 120,
        key: "price_1JtkOOHBXGNcJIH4ePCBuh4K",
      },
    ],
    [
      {
        amount: 50,
        key: "price_1JtkoTHBXGNcJIH4JjUQaRnd",
      },
      {
        amount: 50,
        key: "price_1JtkmWHBXGNcJIH4y5am3SgK",
      },
    ],
    [
      {
        amount: 100,
        key: "price_1JtkoTHBXGNcJIH461SbDvww",
      },
      {
        amount: 100,
        key: "price_1JtkmWHBXGNcJIH4g50g3fct",
      },
    ],
  ];

  var donationsGrid = document.getElementById("donations-grid");

  donationsGrid.innerHTML =
    "<table><thead><tr>" +
    headers
      .map(function (header) {
        return "<th>" + header + "</th>";
      })
      .join("") +
    "</th></tr></thead><tbody>" +
    rows
      .map(function (row) {
        return (
          "<tr>" +
          row
            .map(function (cell) {
              return (
                "<td><button role='link' type='button' data-key='" +
                cell.key +
                "'>$" +
                cell.amount +
                "</button></td>"
              );
            })
            .join("") +
          "</tr>"
        );
      })
      .join("") +
    "</tbody></table>";

  donationsGrid.addEventListener("click", function (e) {
    var price = e.target.getAttribute("data-key");
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe
      .redirectToCheckout({
        lineItems: [{ price: price, quantity: 1 }],
        mode: "payment",
        /*
         * Do not rely on the redirect to the successUrl for fulfilling
         * purchases, customers may not always reach the success_url after
         * a successful payment.
         * Instead use one of the strategies described in
         * https://stripe.com/docs/payments/checkout/fulfill-orders
         */
        successUrl: "https://rnptech.org/success",
        cancelUrl: "https://rnptech.org/canceled",
      })
      .then(function (result) {
        if (result.error) {
          /*
           * If `redirectToCheckout` fails due to a browser or network
           * error, display the localized error message to your customer.
           */
          var displayError = document.getElementById("donations-error");
          displayError.textContent = result.error.message;
        }
      });
  });
})();

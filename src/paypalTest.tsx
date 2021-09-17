import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export function PaypalTest() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "sb",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          // sets up the details of the transaction
          return actions.order.create({
            //intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: "15.00",
                  //currency_code: "USD",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          // captures the funds from the transaction
          return actions.order
            .capture()
            .then((details) =>
              alert("Transaction completed by " + details.payer.name.given_name)
            );
        }}
        onCancel={(data, actions) => {
          alert("Transaction cancelled");
        }}
        onError={(err) => {
          alert("Error in completing transaction: " + err);
        }}
      />
    </PayPalScriptProvider>
  );
}

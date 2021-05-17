import "./index.css";
import React, { useState } from "react";
// import REACTDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import { Grid, Card } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Donate = () => {
  const [product] = useState({
    name: "GamingNeeds",
    price: "20",
    description: "Gaming Consoles, Graphics Card, Smart Devices, Systems."
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://gamingneeds-nodeexpress.herokuapp.com/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div>
      <Card style={{ minHeight: "30vh", backgroundColor:'black', opacity:'0.8', color:'white', fontSize:"21px", padding:"20px"}}>
        <h2 style={{ textAlign: "center" }}>Payment Details</h2>
        <Grid item xs={10} style={{ display: "flex" }}>
          <Grid item xs={8} style={{ textAlign: "left" }} spacing={0}>
            <h4>Donate to:  {product.name}</h4>
            <h4>Price: ${product.price}</h4>
            <h4>Description: {product.description}</h4>
          </Grid>
          <Grid item xs={3} style={{ marginBlock: "80px" }}>
            <StripeCheckout
              stripeKey="pk_test_51IqvHxSI7IldTgfALn3g8OBlJBl8VH99uDzDYi7w0KwUf3bQj55v3CVpQrUuJ1jyxtCEkrGTKVqY1hpBNBgIwgB400DEAPsLvy"
              token={handleToken}
              amount={product.price * 100}
              name="Gaming Needs"
              billingAddress
              shippingAddress
              style={{ padding: "6px" }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Donate;

import React from "react";

import Layout from "../components/layout";
import QuoteComponents from "../components/quote";
import Form from "../components/quote/Form";

function Quote() {
  return (
    <Layout>
      <QuoteComponents />
      <Form />
    </Layout>
  );
}

export default Quote;

import React from "react";

const WikiCall = ({ apiKey, name, dataFill, hideButton }) => {
  const wiki = require("wikipedia");

  let data;
  (async () => {
    try {
      const page = await wiki.page(apiKey);
      const summary = await page.intro(apiKey);
      data = summary;
    } catch (error) {
      console.log(error);
      //=> Typeof wikiError
    }
  })();

  return (
    <div>
      <center>
        <button
          className="wiki-button-style"
          primary="true"
          onClick={() => {
            dataFill(data);
            hideButton(false);
          }}
        >
          {name}
        </button>
      </center>
    </div>
  );
};

export default WikiCall;

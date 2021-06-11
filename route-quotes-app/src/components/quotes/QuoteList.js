import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isDescending = queryParams.get("sort") === "desc";

  const sortedQuotes = sortQuotes(props.quotes, !isDescending);

  const chagneSortingHandler = () => {
    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${isDescending ? "asc" : "desc"}`,
    // });

    history.push(`${location.pathname}?sort=${isDescending ? "asc" : "desc"}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={chagneSortingHandler}>
          Sort {isDescending ? "descending" : "ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

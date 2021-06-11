import { Route, Link } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router";
import Comments from "../components/comments/Comments";
import { Fragment, useEffect } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = (props) => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  console.log(quoteId);
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (status === "completed" && !loadedQuote) {
    return <h3>No quote found</h3>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            View Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}`}>
            Hide Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

import {
  isRouteErrorResponse,
  Link,
  useRouteError,
} from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <>
      <Header />
      <div>
        <h1>Du er havnet på en side som ikke findes! </h1>
        <p>{error.message}</p>
        <p>Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.</p>
        <Link to="/"><button className="home__button">Gå til forsiden</button></Link>
      </div>
      <Footer/>
      </>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
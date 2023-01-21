import { useOutletContext, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export function Book() {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div className="App">
      <Helmet>
        <title>Books</title>
      </Helmet>
      <h1>
        Book {id} {obj.hello}
      </h1>
    </div>
  );
}

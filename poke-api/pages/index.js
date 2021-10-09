import styles from "../styles/Home.module.css";
import Link from "next/link";

import List from "../Pokemon/List/List";
import View from "../Pokemon/View/View";
import { useRouter } from "next/router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <Router>
        <h1>
          <Link to="/pokemons/list">Brava pokelist</Link>
        </h1>
        <Switch>
          <Route path="/pokemons/list" component={List} />
          <Route path="/pokemons/:name" component={View} />
          <Route path="/" exact>
            <Redirect to="/pokemons/list" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


import React, { Fragment } from "react";
import Navbar from "./components/navbar.component";
import AppTable from "./components/table.component";
import { io } from "socket.io-client";
import CircularColor from "./components/progress.component";

const App = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = () => {
      const socket = io("http://localhost:4001");
      socket.on("random", (rawdata) => {
        const newData = JSON.parse(rawdata);

        setData((prevprop) => [...prevprop, ...newData]);

        // console.log(newData);
        setLoading(false);
      });
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      {loading && <CircularColor />}
      {!loading && <AppTable tabledata={data} />}
    </Fragment>
  );
};
export default App;

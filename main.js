import axios from "axios";

async function get_data() {
  let xmls = `<GetAttLog>
    <ArgComKey xsi:type="xsd:integer">0</ArgComKey>
    <Arg><PIN xsi:type="xsd:integer">ALL</PIN></Arg></GetAttLog>`;

  let data = await axios.post("http://172.107.7.10/iWsService", xmls, {
    headers: {
      "Content-Type": "text/xml",
      "Content-Length": xmls.length,
    },
  });

  console.log(data.data);
}

get_data();

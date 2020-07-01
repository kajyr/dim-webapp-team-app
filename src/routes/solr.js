const { client } = require("../solrClient");

module.exports = [
  {
    method: "GET",
    path: `/solr/experts`,

    handler: (req, res) => {
      const { name } = req.query;

      const strQuery = client.query().q("*").rows(0).start(0);

      client.search(strQuery, function (err, result) {
        if (err) {
          res.status(500).send(err);
        }
        res.send({
          ok: 1,
          response: result.response,
        });
      });
    },
  },
];

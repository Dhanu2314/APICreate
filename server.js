const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];
  res.json(users);
});

const PORT = 8004;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    (async function () {
      const respone = await fetch(
        "https://khulasa-news.com/interview/list_user.php"
      );
      const result = await respone.json();
      setApiData(result?.data);
    })();
  }, []);

  console.log(apiData);

  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-semibold mb-6">Khulasa News</h1>
      <table>
        <tr className="text-center">
          <th>User Id</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Designation</th>
          <th>Department</th>
        </tr>
        {apiData?.map((user)=>(
          <tr key={user} className="text-center">
          <td>{user.userId}</td>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.mobile}</td>
          <td>{user.status}</td>
          <td>{user.designation}</td>
          <td>{user.department}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

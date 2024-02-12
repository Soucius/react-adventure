import { useParams, useLoaderData } from "react-router-dom";

function User() {
    const { userid } = useParams();
    const data = useLoaderData();

  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      <div>Logged user: {userid}</div>
      <div>User id: {data.id}</div>
    </div>
  );
}

export default User;
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/soucius").then((response) => response.json()).then(data => {
    //         console.log(data);
    //         setData(data);
    //     });
    // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <p>Github Repositories: {data.public_repos}</p>

        <img src={data.avatar_url} width={300} alt="avatar" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/soucius");

    return response.json();
};
import { useLoaderData } from "react-router-dom";

function Contact() {
    const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">
        <div className="text-3xl py-2">Contact</div>

        <div className="p-4 m-3">
            <div className="text-xl">Blog: {data.blog}</div>
            <div className="text-xl">Twitter: {data.twitter_username}</div>
        </div>
    </div>
  );
}

export default Contact;
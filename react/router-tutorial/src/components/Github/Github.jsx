import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-[350px] text-center hover:shadow-2xl transition-shadow duration-300">
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="profile"
          className="w-28 h-28 mx-auto rounded-full border-4 border-gray-200 shadow-md"
        />

        {/* Username */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          {data.name || data.login}
        </h2>

        {/* Bio */}
        <p className="text-gray-500 mt-2 text-sm">
          {data.bio || "No bio available"}
        </p>

        {/* Stats */}
        <div className="mt-6 flex justify-around text-gray-700">
          <div>
            <p className="text-xl font-bold">{data.public_repos}</p>
            <p className="text-sm">Repos</p>
          </div>
          <div>
            <p className="text-xl font-bold">{data.followers}</p>
            <p className="text-sm">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold">{data.following}</p>
            <p className="text-sm">Following</p>
          </div>
        </div>

        {/* Profile Button */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/h-dhiman08");
  return response.json();
};

import Office from "../../assets/Office.svg";
import Location from "../../assets/Location.svg";
import Followers from "../../assets/Followers.svg";

const UserCard = ({ userData }) => {
  return (
    <>
      <div className="p-[20px] w-[50vh] border-none rounded-md bg-customRed flex flex-col justify-evenly items-center gap-[20px] text-white">
        <div className="flex flex-col gap-[5px]">
          <div className="rounded-[50%] border-[1px] border-black w-[200px] h-[200px] overflow-hidden">
            <img
              src={userData?.avatar_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-black">@{userData?.login}</h1>
        </div>
        <h1>
          <a className="text-3xl" href={userData?.html_url}>
            {userData?.name}
          </a>{" "}
        </h1>
        <h1 className="text-xl">{userData?.bio}</h1>
        <div className="flex justify-around items-center gap-2">
          <img src={Office} alt="office" />
          <h1>{userData?.company}</h1>
        </div>
        <div className="flex justify-around items-center gap-2">
          <img src={Location} alt="location" />
          <h1>{userData?.location}</h1>
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <img src={Followers} alt="followers" />
          <h1>{userData?.followers} followers</h1>
          <h1>{userData?.following} following</h1>
        </div>
        <h1>Public Repos - {userData?.public_repos}</h1>
      </div>
    </>
  );
};

export default UserCard;

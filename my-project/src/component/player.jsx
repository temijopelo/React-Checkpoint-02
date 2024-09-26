import React from "react";
import PropTypes from "prop-types";

const Player = ({
  name,
  nationalityUrl,
  rating,
  position,
  profileUrl,
  pace,
  shooting,
  dribble,
  tackling,
  physical,
  teamUrl,
  passing,
  background,
}) => {
  return (
    <div
      className={`max-w-[500px] mx-auto my-4 border-4 shadow-2xl p-10 ${background} `}
    >
      <div className="flex justify-around items-center ">
        <div className="flex flex-col gap-2">
          <p className="inline">{rating}</p>
          <p className="inline">{position}</p>
          <img
            className="rounded-full"
            width={30}
            height={30}
            src={nationalityUrl}
            alt=""
          />
          <img
            className="rounded-full object-fill"
            height={30}
            width={30}
            src={teamUrl}
            alt=""
          />
        </div>
        <div>
          <img width={150} src={profileUrl} alt="" />
        </div>
      </div>
      <h1 className="text-center font-bold text-lg">{name}</h1>
      <div>
        <ul className="flex flex-wrap list-none justify-center items-center gap-5 ">
          <li className="w-[100px] text-center">{pace}</li>
          <li className="w-[100px] text-center">{shooting} </li>
          <li className="w-[100px] text-center">{dribble} </li>
          <li className="w-[100px] text-center">{tackling} </li>
          <li className="w-[100px] text-center">{physical} </li>
          <li className="w-[100px] text-center">{passing} </li>
        </ul>
      </div>
    </div>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
};

// Prop validation
Player.propTypes = {
  name: PropTypes.string,
  teamUrl: PropTypes.string,
  nationalityUrl: PropTypes.string,
  rating: PropTypes.number,
  position: PropTypes.string,
  profileUrl: PropTypes.string,
  pace: PropTypes.string,
  shooting: PropTypes.string,
  dribble: PropTypes.string,
  tackling: PropTypes.string,
  physical: PropTypes.string,
  passing: PropTypes.string,
};

export default Player;

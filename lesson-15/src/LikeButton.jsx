import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(prev => prev + 1);
  };

  const handleReset = () => {
    setLikes(0);
  };

  return (
    <div>
      <button onClick={handleClick}>❤️ {likes}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default LikeButton;
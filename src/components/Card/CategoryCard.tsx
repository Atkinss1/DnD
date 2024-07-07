import { useNavigate } from "react-router-dom";
import { CardProps } from "../../types/types";

export const CategoryCard = ({ name, url}: CardProps) => {
  const navigate = useNavigate();

  const handleClick = (api: string) => { 
    navigate(api);
  };

  return(
    <>
      <h1>{name}</h1>
      <br />
      <button onClick={() => handleClick(url)}>Learn More</button>
    </>
  )
}
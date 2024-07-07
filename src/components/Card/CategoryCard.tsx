import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  url: string;
}

export const CategoryCard = ({ name, url}: CategoryCardProps) => {
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
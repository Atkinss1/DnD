import { useNavigate } from "react-router-dom";
import { CardProps } from "../../../types/types";
import { Button } from "@mui/material";

export const CategoryCard = ({ name, url}: CardProps) => {
  const navigate = useNavigate();

  const handleClick = (api: string) => { 
    navigate(api);
  };

  return(
    <>
      <h1>{name}</h1>
      <br />
      <Button size="large" onClick={() => handleClick(url)}>Learn More</Button>
    </>
  )
}
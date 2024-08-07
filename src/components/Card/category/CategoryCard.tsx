import '../../../assets/styles/CategoryCard.scss'
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
      <div className="category-card">
        <h1>{name}</h1>
        <br />
        <Button size="large" onClick={() => handleClick(url)}>
          Learn More
        </Button>
      </div>
    </>
  )
}
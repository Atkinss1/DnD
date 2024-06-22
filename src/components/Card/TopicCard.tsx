import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions } from '@mui/material';
import { TopicCardProps } from '../../types/types';
import { fetchTopic } from '../../utils/fetchTopic';
import { useTopicContext } from '../../context/Topic';
import parseURLAPI from '../../utils/parseUrl';

const TopicCard = ({ name, url }: TopicCardProps) => {
  
  const { setTopic } = useTopicContext();

  const handleClick = async () => {
    try {
      const parsedURL = parseURLAPI(url);
      const results = await fetchTopic(parsedURL);
      setTopic(results);
    } catch (error) {
      console.log('error');
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          <p>Learn more</p>
        </Button>
      </CardActions>
    </Card>
  );
}

export default TopicCard;
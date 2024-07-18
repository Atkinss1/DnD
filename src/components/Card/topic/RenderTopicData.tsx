import '../../../assets/styles/topicCard.scss'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

interface SingleTopicData {
  [key: string]: any;
}

interface TopicDataProps {
  topicData: {[key: string]: SingleTopicData };
}

export const RenderTopicData = ({ topicData }: TopicDataProps) => {
  const topic = Object.keys(topicData)[0];
  const data = topicData[topic];
  const bannedTitles = ['index', 'type', 'option_type', 'option_set_type'];

  const navigate = useNavigate();

  const handleClick = (api: string) => {
    navigate(api);
  }
  
  const renderData = (topicData: any) => { 

    if (Array.isArray(topicData)) { 
      return (
        <ul>
          {topicData.sort().map((item, index) => {
            return <li key={index}> &nbsp;{renderData(item)}&nbsp;</li>
          })}
          <br />
        </ul>
      );
    } else if (typeof topicData === 'object' && topicData !== null) {
      return (
        <div>
          {Object.keys(topicData).map((key) => {
            if (bannedTitles.includes(key)) {
              return null;
            }
            if (key === 'name' || key === 'url') {
              return (
                <div key={key}>
                  <strong className='topic-key-title'>{renderData(topicData[key])}</strong>
                  <br />
                </div>
              )
            }
            return (
              <div key={key}>
                <strong className='topic-key-title'>{key}&nbsp;</strong>
                {renderData(topicData[key])}
              </div>
            ) 
          })} 
        </div>
      );
    } else {
      if (typeof topicData === 'string' && topicData.includes('/api/')) {
        return <Button size="large" onClick={() => handleClick(topicData)}>Learn More</Button>
      }
      return <span>{topicData}</span>
    }
  };
  
  return <div className='topic-card'>{renderData(data)}</div>;

};
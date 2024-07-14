import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
          {Object.keys(topicData).sort().map((key) => {
            if (bannedTitles.includes(key)) {
              return null;
            }
            return (
              <div key={key}>
                <strong>{key}&nbsp;:</strong> {renderData(topicData[key])}
              </div>
            );
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
  
  return <div>{renderData(data)}</div>;

};
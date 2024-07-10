import { useNavigate } from "react-router-dom";

interface SingleTopicData {
  [key: string]: any;
}

interface TopicDataProps {
  topicData: {[key: string]: SingleTopicData };
}

export const RenderTopicData = ({ topicData }: TopicDataProps) => {
  const topic = Object.keys(topicData)[0];
  const topicObj = topicData[topic];
  console.log(topicData);

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
      console.log('topicData object', topicData);
      return (
        <div>
          {Object.keys(topicData).sort().map((key) => {
            if (key === 'index' || key === 'type' || key === 'option_type' || key === 'option_set_type') {
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
        return <button onClick={() => handleClick(topicData)}>{topicData}</button>
      }
      return <span>{topicData}</span>
    }
  };
  
  return <div>{renderData(topicObj)}</div>;

};
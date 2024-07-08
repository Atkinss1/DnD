import { SingleTopicData } from "../../types/types"

interface TopicDataProps {
  [key: string]: SingleTopicData;
}

export const renderTopicData = (topicData: TopicDataProps) => {
  return Object.keys(topicData).map((key) => {
    
    let value: SingleTopicData = topicData[key];

    if (Array.isArray(value)) { 
      console.log('value is an array', key);
      return (
        <div key={key}>
          <h4>{key}</h4>
          <ul>
            {value.map((item, index) =>
              <li key={index}>{item}</li>
            )}
          </ul>
        </div>
      );
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      console.log('value and not array', value);
      return (
        <div key={key}>
          <h4>{key}</h4>
          <ul>
            {Object.keys(value).map((nestedKey) => {
              console.log('iterate through value', value[nestedKey as keyof SingleTopicData]);
              if (nestedKey === 'index') {
                return null;
              }

              if (typeof value[nestedKey as keyof SingleTopicData] === 'object' && !Array.isArray(value[nestedKey as keyof SingleTopicData])) {
                return (
                  <div key={nestedKey}>
                    <h4>{nestedKey}</h4>
                    <ul>
                      {Object.keys(nestedKey).map((deeplyNestedKey) => {
                        if (deeplyNestedKey === 'index') {
                          return null;
                        }

                        return <li key={nestedKey}>
                          <strong>{deeplyNestedKey}: </strong>
                          {value[deeplyNestedKey as keyof SingleTopicData]}
                        </li>
                      })}
                    </ul>
                  </div>
                )
              }

              return <li key={nestedKey}>
                <strong>{nestedKey}: </strong>
                {value[nestedKey as keyof SingleTopicData]}
              </li>
            })}
          </ul>
        </div>
      );
    }
    return null;
  })
};
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../../assets/styles/hero.scss';
import { useCategoryContext } from '../../context/categoryProvider';
import { fetchCategoryApi } from '../../utils/Categories/fetchCategoryApi';
import { fetchTopicApi } from '../../utils/Topics/fetchTopicApi';
import { CategoryCard } from '../Card/category/CategoryCard';
import { TopicCard } from '../Card/topic/TopicCard';

const Hero = () => {

  const { fetchCategoryData, fetchTopicData, clearTopicApi, categories, topicData, loadingCategories, error } = useCategoryContext();
  const { category, topic } = useParams();
  const location = useLocation();
  
  const apiPath = location.pathname;

  useEffect(() => {
    fetchCategoryApi({ category, topic, fetchCategoryData, clearTopicApi, apiPath });
    fetchTopicApi({ topic, fetchTopicData, apiPath });
  }, [apiPath]);
  
  if (loadingCategories) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className="hero-title">
        <h1>{category ? `Category: ${category}` : null}</h1>
      </div>

      {category && !topic ? (
        categories.map((category) =>  
          <CategoryCard key={category.index} {...category} />
        )
      ) : topic ? <TopicCard  topicData={topicData}/> : (
          <div className="hero-container">
          <div className="hero-image">
            <div className="hero-image-text">
              <h2>Dungeons&Dragons</h2>
              <h3>Character Creator</h3>
              <p>Need a hand making your first character or NPC?</p>
            </div>
          </div>
        </div>
      )
       }
      
    </>
  )
} 

export default Hero;
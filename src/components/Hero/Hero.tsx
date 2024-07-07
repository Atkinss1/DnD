import { useLocation, useParams } from 'react-router-dom';
import '../../assets/styles/hero.scss';
import { useEffect } from 'react';
import { useCategoryContext } from '../../context/categoryProvider';
import { CategoryCard } from '../Card/CategoryCard';

const Hero = () => {

  const { fetchCategoryData, categories, loadingCategories, error } = useCategoryContext();
  const { category } = useParams();
  const location = useLocation();
  
  const apiPath = location.pathname;
  console.log('categories', categories);

  useEffect(() => {
    if (category && fetchCategoryData) {
      fetchCategoryData(apiPath);
    }
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

      {category ? (
        categories.map((category) =>  
          <CategoryCard key={category.index} {...category} />
        )
      ) :  (
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
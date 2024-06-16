export const fetchTopic = async (cardTopic: string) => {
    try { 
      const response = await fetch(`https://www.dnd5eapi.co/api/${cardTopic}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error('Something went wrong: ');
    }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else (
        console.log('Unknown error has occured')
      );
    }
    
  };
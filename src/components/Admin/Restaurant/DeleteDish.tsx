import { useMutation } from '@apollo/client'
import React from 'react'
import { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { REMOVE_DISH } from '../../../graphql/dishes'
import { RESTAURANT_DISHES } from '../../../graphql/restaurants'
import * as Routes from '../../../routes';

interface Props {
  
}



export const DeleteDish = (props: Props) => {
  let { dishId } = useParams<{ dishId:string }>();
  console.log(dishId);
  
  const [removeDish, {data, loading, error}] = useMutation(REMOVE_DISH);

  useEffect(() => {
    console.log(data);
    console.log(dishId);

    
    removeDish({
      variables: {
        id: Number(dishId),
      },
      refetchQueries: [
        {
          query: RESTAURANT_DISHES
        }
      ]
    })
  }, [dishId])

  return (
    <>
      {data ?  (
        <Redirect to={Routes.DISHES.replace(':restaurantId', '1')} /> 
      ): (
        <p>Loading ....</p>
      )}
    </>
  )
}

import { useLazyQuery, useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { useUser } from '../../../context/AuthenticationContext'
import { REMOVE_DISH } from '../../../graphql/dishes'
import { GET_RESTAURANTID_BY_USERID, RESTAURANT_DISHES } from '../../../graphql/restaurants'
import * as Routes from '../../../routes';

interface Props {
  
}



export const DeleteDish = (props: Props) => {
  const userContext = useUser();
  const userId: number | undefined = userContext?.state.id;
  const [restaurantIdByUserId, { error, loading, data}] = useLazyQuery(GET_RESTAURANTID_BY_USERID);

  const [removeDish, {data:removeData, loading:removeLoading, error:removeError}] = useMutation(REMOVE_DISH);

  let { dishId } = useParams<{ dishId:string }>();

  useEffect(() => {
    if (userId !== undefined) {
      restaurantIdByUserId({variables: {
        userId: userId
      }})

    if (data) {
      const restaurantId = data.getRestaurantByUserId.id;

      removeDish({
        variables: {
          id: Number(dishId),
        },
        refetchQueries: [
          {
            query: RESTAURANT_DISHES,
            variables: { id: restaurantId}
          }
        ]
      })
    }
    }
  }, [userId, data, dishId])

  

  return (
    <>
      {removeData ?  (
        <Redirect to={Routes.DISHES} /> 
      ): (
        <p>Loading ....</p>
      )}
    </>
  )
}

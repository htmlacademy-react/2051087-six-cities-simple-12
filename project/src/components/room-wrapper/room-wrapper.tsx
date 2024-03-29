import { GetNearbyOffers, Offer, OfferId, Offers, Reviews } from '../../types/type';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropertyScreen from '../../pages/property-screen/property-screen';
import { parseInteger } from '../../utils/utils';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

type RoomWrapperProps = {
  getNearbyOffers: GetNearbyOffers;
  reviews: Reviews;
  isUserLoggedIn: boolean;
}

function RoomWrapper(props: RoomWrapperProps): JSX.Element | null {
  const { id: offerId } = useParams();
  const offerIdAsInt = parseInteger(offerId);
  const offers = useAppSelector((state) => state.offers);
  const foundOffer = getOfferById(offers, offerIdAsInt);

  if (foundOffer === undefined) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const offerReviews = getReviewsById(props.reviews, foundOffer.id);
  const nearbyOffers = props.getNearbyOffers(foundOffer.id);

  return (
    <PropertyScreen
      nearbyOffers={nearbyOffers}
      offer={foundOffer}
      reviews={offerReviews}
      isUserLoggedIn={props.isUserLoggedIn}
    />
  );
}

function getOfferById(offers: Offers, id: OfferId): Offer | undefined {
  const foundOffers = offers.filter(
    (offer) => offer.id === id
  );
  const [ foundOffer ] = foundOffers;
  return foundOffer;
}

function getReviewsById(reviews: Reviews, id: OfferId): Reviews {
  return reviews.filter((review) => review.id === id);
}

export default RoomWrapper;

import Logo from '../../components/logo/logo';
import NearPlacesCards from '../../components/near-places-cards/near-places-cards';
import RoomDescription from '../../components/room-description/room-description';
import RoomGallery from '../../components/room-gallery/room-gallery';
import RoomHardwareFeatures from '../../components/room-hardware-features/room-hardware-features';
import RoomHost from '../../components/room-host/room-host';
import RoomReviews from '../../components/room-reviews/room-reviews';
import { Offer, Offers, Reviews } from '../../types/type';
import { capitalizeFirstLetter, getPercentFromRating } from '../../utils/utils';

type RoomProps = {
  nearbyOffers: Offers;
  offer: Offer;
  reviews: Reviews;
  isUserLoggedIn: boolean;
}

export default function PropertyScreen({ nearbyOffers, offer, reviews, isUserLoggedIn }: RoomProps): JSX.Element {
  return (
    <div className="page">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery images={offer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: getPercentFromRating(offer.rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstLetter(offer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <RoomHardwareFeatures goods={offer.goods} />
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <RoomHost host={offer.host} />
                <RoomDescription description={offer.description} />
              </div>
              <section className="property__reviews reviews">
                <RoomReviews isUserLoggedIn={isUserLoggedIn} reviews={reviews} offerId={offer.id} />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <NearPlacesCards offers={nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}


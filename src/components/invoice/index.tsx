import usePriceFormatter from 'hooks/usePriceFormatter';
import { InvoiceData } from 'types';

export default function Invoice({ invoiceData }: { invoiceData: InvoiceData }) {
  const { finalPrice: products } = usePriceFormatter(invoiceData.products, 1);
  const { finalPrice: shipping } = usePriceFormatter(invoiceData.shipping, 1);
  const { finalPrice: total } = usePriceFormatter(invoiceData.total, 1);
  return (
    <div className='invoice__container'>
      <div className='invoice__price__wrapper'>
        <p className='invoice__label'>Products:</p>
        <p className='invoice__price'>{products}</p>
      </div>
      <div className='invoice__price__wrapper'>
        <p className='invoice__label'>Shipping:</p>
        <p className='invoice__price'>{shipping}</p>
      </div>
      <div className='invoice__price__wrapper'>
        <p className='invoice__label'>Total:</p>
        <p className='invoice__price'>{total}</p>
      </div>
      <div className='invoice__button__wrapper'>
        <button className='invoice__button'>Checkout</button>
      </div>
      <div className='invoice__info__wrapper'>
        <p className='invoice__info__label'>
          <i className='fal fa-check-circle invoice__icon__check'></i>Delivery
          Guarantee
        </p>
        <p className='invoice__info__text'>
          All your purchases have delivery guarantee
        </p>
        <p className='invoice__info__label'>
          <i className='fal fa-shipping-fast invoice__icon__shipping'></i>Order
          available for Shipping
        </p>
        <p className='invoice__info__text'>
          Receive your order from 5 to 10 business days by selecting at the end
          of your purchase
        </p>
      </div>
    </div>
  );
}

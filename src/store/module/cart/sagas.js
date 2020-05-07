import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess, updateAmonut } from './actions';
import { formatPrice } from '../../../utils/format';

function* addToCart({ id }) {
  const productExistis = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  if (productExistis) {
    const amount = productExistis.amount + 1;

    yield put(updateAmonut(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

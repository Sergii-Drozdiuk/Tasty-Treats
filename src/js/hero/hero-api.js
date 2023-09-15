import axios from 'axios';
import { Block } from 'notiflix/build/notiflix-block-aio';

export async function uploadUser(data) {
  Block.dots('.modal-order-send', { svgColor: '#9BB537' });
  const r = await axios({
    method: 'POST',
    url: 'https://tasty-treats-backend.p.goit.global/api/orders/add',
    data,
  });
  Block.remove('.modal-order-send');
  return r;
}

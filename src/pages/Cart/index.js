import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="data:image/jpeg;base64,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"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$259,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

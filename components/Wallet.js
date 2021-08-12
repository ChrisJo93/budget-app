import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { walletList } from 'redux/actions';

/* To Do:
1. Form for new wallet entry.
2. Style wallets to be a little smaller.
3. Add radial selection for each wallet.
4. Dynamically render wallet contents. 
5. Change walletList to radio component devoid of internal state.
 */

const Wallet = (props) => {
  return null;
};

export default connect((state) => state)(Wallet);

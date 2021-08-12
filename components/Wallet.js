import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import WalletList from './WalletList';
import { walletList } from 'redux/actions';

/* To Do:
1. Form for new wallet entry.
2. Style wallets to be a little smaller.
3. Add radial selection for each wallet.
4. Dynamically render wallet contents. 
5. Change walletList to radio component devoid of internal state.
 */

const Wallet = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(walletList()), []);

  const wallets = props.wallet.walletList.map((item, index) => {
    return (
      <WalletList
        key={index}
        name={item.wallet_name}
        amount={item.income}
        className="bg-gray-800"
      />
    );
  });

  return <div className="bg-red-500">{wallets}</div>;
};

export default connect((state) => state)(Wallet);

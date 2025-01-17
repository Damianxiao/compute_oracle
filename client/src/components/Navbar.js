import { Link } from 'react-router-dom';


const Navbar = ({onConnectWallet, address}) =>{
    return(
        <nav className="navbar">
      <div className="navbar-brand">Oracle for compute on chain</div>
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/create-nft">Create NFT</Link> */}
      <div className="navbar-menu">
        <button className="connect-wallet-button" onClick={onConnectWallet}>
          {address.slice(0, 12) || "Connect Wallet"}
        </button>
      </div>
    </nav>
    )
}

export default Navbar 
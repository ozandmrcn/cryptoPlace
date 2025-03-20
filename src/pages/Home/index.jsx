import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import CoinItem from "../../components/CoinItem";

const Home = () => {
  const { allCoin } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const searchHandler = (e) => {
    e.preventDefault();
    const filtredCoin = allCoin.filter((item) => item.name.includes(input));
    setDisplayCoin(filtredCoin);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="px-4">
      <div className="max-w-2xl mx-auto my-16 flex flex-col items-center gap-6 ">
        <h1 className="text-4xl font-bold leading-tight text-center">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-3/4 text-[#e3e3e3] leading-7 ">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form
          onSubmit={searchHandler}
          className="flex w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 text-base border-none text-black"
            placeholder="Search crypto ..."
            value={input}
            onChange={inputHandler}
            list="coinlist"
          />

          <datalist id="coinlist">
            {allCoin.map((item, key) => (
              <option key={key}>{item.name} </option>
            ))}
          </datalist>

          <button
            type="submit"
            className="bg-[#7927ff] px-5 py-2 font-semibold hover:opacity-90"
          >
            Search
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto bg-[#141414] rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-[0.5fr_2fr_1fr_1fr] p-4 bg-[#222] font-semibold">
          <p>#</p>
          <p>Coins</p>
          <p className="text-center">Price</p>
          <p className="hidden md:block text-right">24H Change</p>
        </div>
        {displayCoin.map((item, key) => (
          <CoinItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

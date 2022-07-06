import { useStarknet } from "@starknet-react/core";

import ButtonConnect from "./ButtonConnect";
import { minimizeAddress } from "src/utils/web3";

export default function Header() {
  const { account } = useStarknet();

  return (
    <header className="flex flex-row items-center mb-12">
      <div className="grow h-[120px] flex flex-row items-center">
        <div className="ml-6 text-4xl font-alfreda">Deathnote</div>
      </div>
      {renderButton()}
    </header>
  );

  function renderButton() {
    if (!account) {
      return <ButtonConnect />;
    }

    return (
      <div className="flex flex-row items-center">
        <div>
          <span>Your wallet address: </span>
          {minimizeAddress(account)}
        </div>
      </div>
    );
  }
}
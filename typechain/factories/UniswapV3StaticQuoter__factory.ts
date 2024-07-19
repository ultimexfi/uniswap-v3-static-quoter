/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapV3StaticQuoter } from "../UniswapV3StaticQuoter";

export class UniswapV3StaticQuoter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _initCodeHash: BytesLike,
    overrides?: Overrides
  ): Promise<UniswapV3StaticQuoter> {
    return super.deploy(
      _factory,
      _initCodeHash,
      overrides || {}
    ) as Promise<UniswapV3StaticQuoter>;
  }
  getDeployTransaction(
    _factory: string,
    _initCodeHash: BytesLike,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _initCodeHash, overrides || {});
  }
  attach(address: string): UniswapV3StaticQuoter {
    return super.attach(address) as UniswapV3StaticQuoter;
  }
  connect(signer: Signer): UniswapV3StaticQuoter__factory {
    return super.connect(signer) as UniswapV3StaticQuoter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3StaticQuoter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapV3StaticQuoter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_initCodeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "getAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quote",
    outputs: [
      {
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType:
          "struct IUniswapV3StaticQuoter.QuoteExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "quoteExactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType:
          "struct IUniswapV3StaticQuoter.QuoteExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200292538038062002925833981016040819052620000349162000050565b60609190911b6001600160601b03191660805260a0526200008a565b6000806040838503121562000063578182fd5b82516001600160a01b03811681146200007a578283fd5b6020939093015192949293505050565b60805160601c60a051612874620000b1600039806112d05250806112af52506128746000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c6a5026a1161005b578063c6a5026a146100df578063cdca1753146100f2578063d7176ca914610105578063ec278309146101185761007d565b80632f80bb1d1461008257806390405d36146100ab578063bd21704a146100cc575b600080fd5b610095610090366004612715565b61012b565b6040516100a291906127e8565b60405180910390f35b6100be6100b93660046126bf565b6101cb565b6040516100a29291906127da565b6100956100da3660046127a3565b610489565b6100956100ed3660046127a3565b610534565b610095610100366004612715565b6105b1565b61009561011336600461266f565b61063b565b61009561012636600461266f565b61084a565b60005b600080600061013c86610a4b565b9250925092506101926040518060a00160405280846001600160a01b03168152602001856001600160a01b031681526020018781526020018362ffffff16815260200160006001600160a01b0316815250610489565b945061019d86610a7c565b156101b2576101ab86610a84565b95506101bd565b8493505050506101c5565b50505061012e565b92915050565b60008083610220576040805162461bcd60e51b815260206004820152601e60248201527f616d6f756e745370656369666965642063616e6e6f74206265207a65726f0000604482015290519081900360640190fd5b60008085139080806102348a8a8a8a610a9b565b9250925092505b8051158015906102615750866001600160a01b031681604001516001600160a01b031614155b156104525761026e61253d565b60408201516001600160a01b031681526060820151610290908c90868d610b2e565b6001600160a01b031660608401819052901515604080850191909152600292830b90920b6020840152908301516102de916102cd908d908c610b8b565b6080850151855161ffff8816610bd8565b60c085015260a084015260808301526001600160a01b031660408301528415610340576103148160c00151826080015101610dca565b825103825260a08101516103369061032b90610dca565b602084015190610de0565b602083015261037b565b61034d8160a00151610dca565b825101825260c081015160808201516103759161036a9101610dca565b602084015190610df6565b60208301525b80606001516001600160a01b031682604001516001600160a01b03161415610411578060400151156103e85760006103b78c8360200151610e0c565b5050505050509150508a156103ca576000035b6103d8836080015182610ed3565b6001600160801b03166080840152505b896103f7578060200151610400565b60018160200151035b600290810b900b606083015261044c565b80600001516001600160a01b031682604001516001600160a01b03161461044c5761043f8260400151610f89565b600290810b900b60608301525b5061023b565b8315158915151461046b57602081015181518903610478565b8060000151880381602001515b909b909a5098505050505050505050565b6020810151815160608301516000926001600160a01b03808216908416109284926104b492906112a8565b905060008061051783856104cb8960400151610dca565b60000389608001516001600160a01b03166000146104ed5789608001516100b9565b8761050c5773fffd8963efd1fc6a506488495d951d5263988d256100b9565b6401000276a46101cb565b91509150836105265780610528565b815b9450505050505b919050565b6020810151815160608301516000926001600160a01b038082169084161092849261055f92906112a8565b905060008061059383856105768960400151610dca565b60808a01516001600160a01b0316156104ed5789608001516100b9565b91509150836105a55781600003610528565b60000395945050505050565b60005b60008060006105c286610a4b565b9250925092506106186040518060a00160405280856001600160a01b03168152602001846001600160a01b031681526020018781526020018362ffffff16815260200160006001600160a01b0316815250610534565b945061062386610a7c565b156101b25761063186610a84565b95505050506105b4565b60008281806001600160a01b038088169089161161065a57868861065d565b87875b91509150816001600160a01b0316836001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a457600080fd5b505afa1580156106b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dc9190612653565b6001600160a01b03161415806107745750806001600160a01b0316836001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561073057600080fd5b505afa158015610744573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107689190612653565b6001600160a01b031614155b156107855760009350505050610842565b61083c6040518060a001604052808a6001600160a01b03168152602001896001600160a01b03168152602001878152602001856001600160a01b031663ddca3f436040518163ffffffff1660e01b815260040160206040518083038186803b1580156107f057600080fd5b505afa158015610804573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082891906127be565b62ffffff1681526000602090910152610534565b93505050505b949350505050565b60008281806001600160a01b038088169089161161086957868861086c565b87875b91509150816001600160a01b0316836001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156108b357600080fd5b505afa1580156108c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108eb9190612653565b6001600160a01b03161415806109835750806001600160a01b0316836001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561093f57600080fd5b505afa158015610953573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109779190612653565b6001600160a01b031614155b156109945760009350505050610842565b61083c6040518060a001604052808a6001600160a01b03168152602001896001600160a01b03168152602001878152602001856001600160a01b031663ddca3f436040518163ffffffff1660e01b815260040160206040518083038186803b1580156109ff57600080fd5b505afa158015610a13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3791906127be565b62ffffff1681526000602090910152610489565b60008080610a5984826112ff565b9250610a668460146113af565b9050610a738460176112ff565b91509193909250565b516042111590565b80516060906101c590839060179060161901611456565b600080610aa6612579565b6000610ab1886115a7565b9050610ac287868360000151611655565b610acb88611726565b9350806040015192506040518060a001604052808781526020016000815260200182600001516001600160a01b03168152602001826020015160020b8152602001610b158a611793565b6001600160801b03168152509150509450945094915050565b6000806000610b3f878787876117ce565b9093509150620d89e719600284900b1215610b6057620d89e7199250610b76565b620d89e8600284900b1315610b7657620d89e892505b610b7f836117ea565b90509450945094915050565b600083610bac57816001600160a01b0316836001600160a01b031611610bc2565b816001600160a01b0316836001600160a01b0316105b610bcc5782610bce565b815b90505b9392505050565b60008080806001600160a01b03808916908a161015818712801590610c5d576000610c118989620f42400362ffffff16620f4240611b1c565b905082610c2a57610c258c8c8c6001611bcb565b610c37565b610c378b8d8c6001611c44565b9550858110610c48578a9650610c57565b610c548c8b8386611cef565b96505b50610ca7565b81610c7457610c6f8b8b8b6000611c44565b610c81565b610c818a8c8b6000611bcb565b9350838860000310610c9557899550610ca7565b610ca48b8a8a60000385611d3b565b95505b6001600160a01b038a8116908716148215610d0a57808015610cc65750815b610cdc57610cd7878d8c6001611c44565b610cde565b855b9550808015610ceb575081155b610d0157610cfc878d8c6000611bcb565b610d03565b845b9450610d54565b808015610d145750815b610d2a57610d258c888c6001611bcb565b610d2c565b855b9550808015610d39575081155b610d4f57610d4a8c888c6000611c44565b610d51565b845b94505b81158015610d6457508860000385115b15610d70578860000394505b818015610d8f57508a6001600160a01b0316876001600160a01b031614155b15610d9e578589039350610dbb565b610db8868962ffffff168a620f42400362ffffff16611d87565b93505b50505095509550955095915050565b6000600160ff1b8210610ddc57600080fd5b5090565b808203828113156000831215146101c557600080fd5b818101828112156000831215146101c557600080fd5b600080600080600080600080896001600160a01b031663f30dba938a6040518263ffffffff1660e01b8152600401808260020b81526020019150506101006040518083038186803b158015610e6057600080fd5b505afa158015610e74573d6000803e3d6000fd5b505050506040513d610100811015610e8b57600080fd5b508051602082015160408301516060840151608085015160a086015160c087015160e090970151959e50939c50919a5098509650945090925090509295985092959890939650565b60008082600f0b1215610f3857826001600160801b03168260000384039150816001600160801b031610610f33576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b6101c5565b826001600160801b03168284019150816001600160801b031610156101c5576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b60006401000276a36001600160a01b03831610801590610fc5575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b610ffa576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c9790881196179094179092171790911717176080811061108e57607f810383901c9150611098565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461129957886001600160a01b031661127d826117ea565b6001600160a01b031611156112925781611294565b805b61129b565b815b9998505050505050505050565b6000610bce7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006112fa878787611dc1565b611e17565b60008182601401101561134e576040805162461bcd60e51b8152602060048201526012602482015271746f416464726573735f6f766572666c6f7760701b604482015290519081900360640190fd5b816014018351101561139f576040805162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b604482015290519081900360640190fd5b500160200151600160601b900490565b6000818260030110156113fd576040805162461bcd60e51b8152602060048201526011602482015270746f55696e7432345f6f766572666c6f7760781b604482015290519081900360640190fd5b816003018351101561144d576040805162461bcd60e51b8152602060048201526014602482015273746f55696e7432345f6f75744f66426f756e647360601b604482015290519081900360640190fd5b50016003015190565b60608182601f0110156114a1576040805162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015290519081900360640190fd5b8282840110156114e9576040805162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015290519081900360640190fd5b81830184511015611535576040805162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b604482015290519081900360640190fd5b606082158015611554576040519150600082526020820160405261159e565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561158d578051835260209283019201611575565b5050858452601f01601f1916604052505b50949350505050565b6115af6125a7565b6115b882611ed7565b816040019061ffff16908161ffff1681525050816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561160457600080fd5b505afa158015611618573d6000803e3d6000fd5b505050506040513d60e081101561162e57600080fd5b508051602091820151600290810b900b918301919091526001600160a01b03168152919050565b60008361169e57816001600160a01b0316836001600160a01b0316118015611699575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038416105b6116cc565b816001600160a01b0316836001600160a01b03161080156116cc57506401000276a36001600160a01b038416115b905080611720576040805162461bcd60e51b815260206004820152601c60248201527f7371727450726963654c696d6974206f7574206f6620626f756e647300000000604482015290519081900360640190fd5b50505050565b6000816001600160a01b031663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561176157600080fd5b505afa158015611775573d6000803e3d6000fd5b505050506040513d602081101561178b57600080fd5b505192915050565b6000816001600160a01b0316631a6865026040518163ffffffff1660e01b815260040160206040518083038186803b15801561176157600080fd5b6000806117dd86868686611fae565b9150915094509492505050565b60008060008360020b12611801578260020b611809565b8260020b6000035b9050620d89e8811115611847576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b60006001821661185b57600160801b61186d565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156118a1576ffff97272373d413259a46990580e213a0260801c5b60048216156118c0576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156118df576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156118fe576fffcb9843d60f6159c9db58835c9266440260801c5b602082161561191d576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561193c576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561195b576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561197b576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561199b576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156119bb576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156119db576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156119fb576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611a1b576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611a3b576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611a5b576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611a7c576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611a9c576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611abb576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611ad8576b048a170391f7dc42444e8fa20260801c5b60008460020b1315611af3578060001981611aef57fe5b0490505b640100000000810615611b07576001611b0a565b60005b60ff16602082901c0192505050919050565b6000808060001985870986860292508281109083900303905080611b525760008411611b4757600080fd5b508290049050610bd1565b808411611b5e57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000836001600160a01b0316856001600160a01b03161115611beb579293925b81611c1857611c13836001600160801b03168686036001600160a01b0316600160601b611b1c565b611c3b565b611c3b836001600160801b03168686036001600160a01b0316600160601b611d87565b95945050505050565b6000836001600160a01b0316856001600160a01b03161115611c64579293925b600160601b600160e01b03606084901b166001600160a01b038686038116908716611c8e57600080fd5b83611cbe57866001600160a01b0316611cb18383896001600160a01b0316611b1c565b81611cb857fe5b04611ce4565b611ce4611cd58383896001600160a01b0316611d87565b886001600160a01b03166121ac565b979650505050505050565b600080856001600160a01b031611611d0657600080fd5b6000846001600160801b031611611d1c57600080fd5b81611d2e57611c1385858560016121b7565b611c3b8585856001612298565b600080856001600160a01b031611611d5257600080fd5b6000846001600160801b031611611d6857600080fd5b81611d7a57611c138585856000612298565b611c3b85858560006121b7565b6000611d94848484611b1c565b905060008280611da057fe5b8486091115610bd1576000198110611db757600080fd5b6001019392505050565b611dc96125a7565b826001600160a01b0316846001600160a01b03161115611de7579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b031610611e3f57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015295901b6bffffffffffffffffffffffff191660a183015260b582019490945260d5808201939093528151808203909301835260f5019052805191012090565b6000816001600160a01b031663da3c300d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611f1257600080fd5b505afa925050508015611f3757506040513d6020811015611f3257600080fd5b505160015b611fa757816001600160a01b031663ddca3f436040518163ffffffff1660e01b815260040160206040518083038186803b158015611f7457600080fd5b505afa158015611f88573d6000803e3d6000fd5b505050506040513d6020811015611f9e57600080fd5b5051905061052f565b905061052f565b6000808581600286810b9088900b81611fc357fe5b05905060008760020b128015611fea57508560020b8760020b81611fe357fe5b0760020b15155b15611ff457600019015b84156120cb576000806120068361237b565b6040805163299ce14b60e11b8152600184810b6004830152915193955091935060ff84161b8001600019019160009183916001600160a01b03891691635339c296916024808301926020929190829003018186803b15801561206757600080fd5b505afa15801561207b573d6000803e3d6000fd5b505050506040513d602081101561209157600080fd5b50511680151597509050866120ad57898360ff168603026120c0565b896120b78261238d565b840360ff168603025b9750505050506121a1565b6000806120da8360010161237b565b91509150600060018260ff166001901b03199050600081866001600160a01b0316635339c296866040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561213857600080fd5b505afa15801561214c573d6000803e3d6000fd5b505050506040513d602081101561216257600080fd5b505116801515975090508661218457898360ff0360ff1686600101010261219a565b898361218f8361242d565b0360ff168660010101025b9750505050505b505094509492505050565b808204910615150190565b6000811561222a5760006001600160a01b038411156121ed576121e884600160601b876001600160801b0316611b1c565b612205565b6001600160801b038516606085901b8161220357fe5b045b905061222261221d6001600160a01b03881683612517565b612527565b915050610842565b60006001600160a01b038411156122585761225384600160601b876001600160801b0316611d87565b61226f565b61226f606085901b6001600160801b0387166121ac565b905080866001600160a01b03161161228657600080fd5b6001600160a01b038616039050610842565b6000826122a6575083610842565b600160601b600160e01b03606085901b168215612334576001600160a01b038616848102908582816122d457fe5b04141561230557818101828110612303576122f983896001600160a01b031683611d87565b9350505050610842565b505b61232b82612326878a6001600160a01b0316868161231f57fe5b0490612517565b6121ac565b92505050610842565b6001600160a01b0386168481029085828161234b57fe5b0414801561235857508082115b61236157600080fd5b8082036122f961221d846001600160a01b038b1684611d87565b60020b600881901d9161010090910790565b600080821161239b57600080fd5b600160801b82106123ae57608091821c91015b6801000000000000000082106123c657604091821c91015b64010000000082106123da57602091821c91015b6201000082106123ec57601091821c91015b61010082106123fd57600891821c91015b6010821061240d57600491821c91015b6004821061241d57600291821c91015b6002821061052f57600101919050565b600080821161243b57600080fd5b5060ff6001600160801b0382161561245657607f190161245e565b608082901c91505b67ffffffffffffffff82161561247757603f190161247f565b604082901c91505b63ffffffff82161561249457601f190161249c565b602082901c91505b61ffff8216156124af57600f19016124b7565b601082901c91505b60ff8216156124c957600719016124d1565b600882901c91505b600f8216156124e357600319016124eb565b600482901c91505b60038216156124fd5760011901612505565b600282901c91505b600182161561052f5760001901919050565b808201828110156101c557600080fd5b806001600160a01b038116811461052f57600080fd5b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080516060810182526000808252602082018190529181019190915290565b600060a082840312156125d8578081fd5b60405160a0810181811067ffffffffffffffff821117156125f557fe5b604052905080823561260681612815565b8152602083013561261681612815565b60208201526040838101359082015260608301356126338161282d565b6060820152608083013561264681612815565b6080919091015292915050565b600060208284031215612664578081fd5b8151610bd181612815565b60008060008060808587031215612684578283fd5b843561268f81612815565b9350602085013561269f81612815565b925060408501356126af81612815565b9396929550929360600135925050565b600080600080608085870312156126d4578384fd5b84356126df81612815565b9350602085013580151581146126f3578384fd5b925060408501359150606085013561270a81612815565b939692955090935050565b60008060408385031215612727578182fd5b823567ffffffffffffffff8082111561273e578384fd5b818501915085601f830112612751578384fd5b813560208282111561275f57fe5b612771601f8301601f191682016127f1565b92508183528781838601011115612786578586fd5b818185018285013790820181019490945295939092013593505050565b600060a082840312156127b4578081fd5b610bd183836125c7565b6000602082840312156127cf578081fd5b8151610bd18161282d565b918252602082015260400190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561280d57fe5b604052919050565b6001600160a01b038116811461282a57600080fd5b50565b62ffffff8116811461282a57600080fdfea264697066735822122096d04d9a10386f11dc56fe0d94ad95c631adf8cd438ca0c2ae84c810c63bf20064736f6c63430007060033";
